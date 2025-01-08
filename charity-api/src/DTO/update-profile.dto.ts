import { IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class UpdateProfileDTO {
    @IsOptional()
    @IsString()
    fullName?: string;
    @IsOptional()
    @IsString()
    email?: string;
    @IsOptional()
    @IsNumber()
    phone?: number;
    @IsOptional()
    @IsString()
    @MinLength(6) @MaxLength(12)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/, { 
        message: "Password too weak, choose a stronger password between 6 and 12 characters." 
    })
    password?: string;
    @IsOptional()
    @IsString()
    services?: string;   
}