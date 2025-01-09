import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { ItemStatus } from "src/Entity/item.entity";

export class ItemAvailabilityValidationPipe implements PipeTransform{
    readonly allowedStatus: ItemStatus[]= [ItemStatus.available, ItemStatus.sold];

    transform(value: any, metadata: ArgumentMetadata) {
        value= value?.toUpperCase();

        if (!this.isAvailabilityValid(value)){
            throw new BadRequestException(`${value} is an invalid availability status`);
        }
        return value; 
    }
    
    private isAvailabilityValid(availability:any) :boolean{
        const index:number = this.allowedStatus.indexOf(availability);
        return index !== -1;
    }
}