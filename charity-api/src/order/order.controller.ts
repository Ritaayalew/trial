import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { AddOrderDto } from 'src/DTO/add-order.dto';

@Controller('api/order')
export class OrderController {
    constructor(private orderService: OrderService){}

    @Get()
    getAllReservations(){
        return this.orderService.getAllReservations();
    }

    @Post()
    addProduct(@Body(ValidationPipe) data: AddOrderDto){
        return this.orderService.addReservation(data);
    }
}
