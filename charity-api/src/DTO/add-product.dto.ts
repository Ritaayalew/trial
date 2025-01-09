import { IsNotEmpty, IsOptional, MaxLength } from "class-validator";

export class AddItemDto{
    @IsNotEmpty()
    @MaxLength(15, {message: 'Max length is 15 characters.'})
    name: string;
    @IsNotEmpty()
    price: number;
    @IsNotEmpty()
    quantity: number;
    @IsOptional()
    category: string;
    @IsOptional() 
    imageUrl: string;
}