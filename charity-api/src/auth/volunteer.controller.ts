import { Body, Controller, Get, Patch, UseGuards, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "./user.decorator";
import { AuthGuard } from "@nestjs/passport";
import { VolunteerEntity } from "src/Entity/volunteer.entity";
import { RegisterVolunteerDTO } from "src/DTO/register-volunteer.dto";
import { UpdateProfileDTO } from "src/DTO/update-profile.dto";


@UseGuards(AuthGuard('jwt'))
@Controller('api/volunteer')
export class VolunteerController {
  constructor(private readonly authService: AuthService) {}

  
  @Get('my-profile')
  getMyProfile(@User() user:VolunteerEntity) {
    return this.authService.getMyProfile(user.email);
  }


  @Patch('edit-profile')
  updateProfile(
    @Body(ValidationPipe) updateProfileDTO: UpdateProfileDTO,
    @User() user:VolunteerEntity){
    return this.authService.updateProfile(user.email,updateProfileDTO);
  }

}
