import { IsNotEmpty, MaxLength } from "class-validator";

export class AddOrderDto{
    @IsNotEmpty()
    @MaxLength(15, {message: 'Max length is 15 characters.'})
    name: string;
    @IsNotEmpty()
    phone: number;
    @IsNotEmpty()
    address: string;
    @IsNotEmpty()
    items: string;
    @IsNotEmpty()
    totalPrice: number;
}
