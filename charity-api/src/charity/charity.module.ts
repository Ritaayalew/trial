import { Module } from '@nestjs/common';
import { CharityController } from './charity.controller';
import { CharityService } from './charity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from 'src/Entity/item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemEntity])
  ],
  controllers: [CharityController],
  providers: [CharityService]
})
export class CharityModule {}
