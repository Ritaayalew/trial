import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationEntity } from 'src/Entity/reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReservationEntity])
  ],
  controllers: [ReservationController],
  providers: [ReservationService]
})
export class ReservationModule {}
