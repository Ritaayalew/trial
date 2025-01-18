import { IsDate, IsNotEmpty, MaxLength } from "class-validator";

export class AddReservationDto{
    @IsNotEmpty()
    @MaxLength(15, {message: 'Max length is 15 characters.'})
    reserverName: string;
    @IsNotEmpty()
    reserverPhone: number;
    @IsNotEmpty()
    reserverEmail: string;
    @IsNotEmpty()
    eventDetails: string;
    @IsNotEmpty()
    date: string;
    @IsNotEmpty()
    time: string;
}