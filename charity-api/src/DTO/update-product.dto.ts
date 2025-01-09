import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ItemStatus } from 'src/Entity/item.entity';

export class UpdateItemDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional() 
  @IsString() 
  imageUrl?: string;

  @IsOptional()
  availability?: ItemStatus;
}
