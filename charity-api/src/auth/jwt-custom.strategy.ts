import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { VolunteerEntity } from "src/Entity/volunteer.entity";
import { Repository } from "typeorm";

export class JwtCustomStrategy extends PassportStrategy(Strategy){
    constructor(@InjectRepository(VolunteerEntity) private repo: Repository<VolunteerEntity>){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'uyghlkowielewofjeiu7r74huhu8'
        });
    }

    async validate(payLoad: {email:string}){
        const {email}=payLoad;
        const user: VolunteerEntity=await this.repo.findOne({where: {email}});

        if (!user) { 
            throw new UnauthorizedException(); 
        } 
        return user;
    }
}