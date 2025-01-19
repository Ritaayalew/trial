import { Body, Controller, Delete, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { AddReservationDto } from 'src/DTO/add-reservation.dto';

@Controller('api/reservation')
export class ReservationController {
    constructor(private reservationService: ReservationService){}

    @Get()
    getAllReservations(){
        return this.reservationService.getAllReservations();
    }

    @Post()
    addProduct(@Body(ValidationPipe) data: AddReservationDto){
        return this.reservationService.addReservation(data);
    }

    @Delete(':id')
    deleteProduct(
        @Param('id') id:number
    ){
        return this.reservationService.deleteReservation(id);
    }
}
