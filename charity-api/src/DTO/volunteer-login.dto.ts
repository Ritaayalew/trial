import { IsNotEmpty } from "class-validator";

export class VolunteerLoginDTO{
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    password: string;
}