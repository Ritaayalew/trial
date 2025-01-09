import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterVolunteerDTO } from 'src/DTO/register-volunteer.dto';
import { VolunteerLoginDTO } from 'src/DTO/volunteer-login.dto';

//http:localhost/3000/api/auth
@Controller('api/auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('register')
    registerVolunteer(@Body(ValidationPipe) regDTO: RegisterVolunteerDTO){
        return this.authService.registerVolunteer(regDTO);
    }

    @Post('login')
    loginVolunteer(@Body(ValidationPipe) loginDTO: VolunteerLoginDTO){
        return this.authService.loginVolunteer(loginDTO);
    }

}
