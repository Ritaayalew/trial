import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CharityService } from './charity.service';
import { AddItemDto } from 'src/DTO/add-product.dto';
import { ItemStatus } from 'src/Entity/item.entity';
import { ItemAvailabilityValidationPipe } from 'src/pipes/ItemAvailabilityValidation.pipe';
import { UpdateItemDto } from 'src/DTO/update-product.dto';

//http:localhost/api/products
@Controller('api/products')
export class CharityController {
    constructor(private charityService: CharityService){}

    @Get()
    getAllProducts(){
        return this.charityService.getAllProducts();
    }

    @Post()
    addProduct(@Body(ValidationPipe) data: AddItemDto){
        return this.charityService.addProduct(data);
    }

    @Patch(':id') 
    updateProduct( 
        @Param('id') id: number, 
        @Body('availability', ItemAvailabilityValidationPipe) availability: string, 
        @Body(new ValidationPipe()) updateItemDto: UpdateItemDto 
    ) { 
        return this.charityService.updateProduct(id,updateItemDto);
    }

    @Delete(':id')
    deleteProduct(
        @Param('id') id:number
    ){
        return this.charityService.deleteProduct(id);
    }



}
