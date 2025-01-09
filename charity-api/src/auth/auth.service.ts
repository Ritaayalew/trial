import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterVolunteerDTO } from 'src/DTO/register-volunteer.dto';
import { VolunteerEntity } from 'src/Entity/volunteer.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { VolunteerLoginDTO } from 'src/DTO/volunteer-login.dto';
import { JwtService } from '@nestjs/jwt';
import { UpdateProfileDTO } from 'src/DTO/update-profile.dto';


@Injectable()
export class AuthService {
    constructor(@InjectRepository(VolunteerEntity) private repo: Repository<VolunteerEntity>,
    private jwt: JwtService){}


    async registerVolunteer(registerDTO: RegisterVolunteerDTO){
        const {fullName,email,phone,password,services}= registerDTO;
        const hashed= await bcrypt.hash(password, 12);
        const salt= await bcrypt.getSalt(hashed);

        const volunteer=new VolunteerEntity();
        volunteer.fullName=fullName;
        volunteer.email=email;
        volunteer.phone=phone;
        volunteer.services=services;
        volunteer.password=hashed;
        volunteer.salt=salt;

        this.repo.create(volunteer);
        try{
            await this.repo.save(volunteer);
            const jwtPayload={email};
            const jwtToken=await this.jwt.signAsync(jwtPayload, {expiresIn:'1d', algorithm: 'HS512'});
            return {token:jwtToken};
        }catch(err){
            throw new InternalServerErrorException('Something went wrong, volunteer not created.'); 
        }
    }

    async loginVolunteer(volunteerLoginDTO: VolunteerLoginDTO){
        const {email,password}=volunteerLoginDTO;

        const user= await this.repo.findOne({where:{email}});

        if (!user){
            throw new UnauthorizedException('Invalid credentials.');
        }

        const isPasswordCorrect= await bcrypt.compare(password,user.password);
        if (isPasswordCorrect){
            const jwtPayload={email};
            const jwtToken=await this.jwt.signAsync(jwtPayload, {expiresIn:'1d', algorithm: 'HS512'});
            return {token:jwtToken};
        }else{
            throw new UnauthorizedException('Invalid credentials.');
        }
    }

    async getMyProfile(email: string) { 
        try { return await this.repo.find({ where: { email } }); 
    } catch (err) { 
        throw new InternalServerErrorException('Failed to fetch user data.'); 
    } }

    async updateProfile(email:string, updateProfileDTO: UpdateProfileDTO){
        await this.repo.update({email},updateProfileDTO);
        return this.repo.findOne({where:{email}});
    }

}
