import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddItemDto } from 'src/DTO/add-product.dto';
import { UpdateItemDto } from 'src/DTO/update-product.dto';
import { ItemEntity, ItemStatus } from 'src/Entity/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CharityService {
    constructor(@InjectRepository(ItemEntity) private repo: Repository<ItemEntity>){}

    async getAllProducts(){
        return await this.repo.find();
    }

    async addProduct(addItemDTO: AddItemDto){
        const item: ItemEntity= new ItemEntity();
        const {name,price,quantity,category,imageUrl}= addItemDTO;

        item.name=name;
        item.price=price;
        item.availability= ItemStatus.available;
        item.quantity=quantity;
        item.category=category;
        item.imageUrl = imageUrl;

        this.repo.create(item);
        try{
            return await this.repo.save(item);
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong, item not created.');
        }
    }

    async updateProduct(id:number, updateItemDto: UpdateItemDto){
        await this.repo.update({id},updateItemDto);
        return this.repo.findOne({where:{id}});
    }

    async deleteProduct(id:number){
        try{
            return await this.repo.delete({id});
        } catch(err){
            throw new InternalServerErrorException('Something went wrong');
        }
        
    }

}
