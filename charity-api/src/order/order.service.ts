import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddOrderDto } from 'src/DTO/add-order.dto';
import { OrderEntity } from 'src/Entity/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
    constructor(@InjectRepository(OrderEntity) private repo: Repository<OrderEntity>){}

    async getAllReservations(){
        return await this.repo.find();
    }

    async addReservation(addOrderDTO: AddOrderDto){
        const order: OrderEntity= new OrderEntity();
        const {name,phone,address,items,totalPrice}= addOrderDTO;

        order.name=name;
        order.phone=phone;
        order.address= address;
        order.items=items;
        order.totalPrice=totalPrice;

        this.repo.create(order);
        try{
            return await this.repo.save(order);
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong, item not created.');
        }
    }
}
