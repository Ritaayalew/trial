import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddReservationDto } from 'src/DTO/add-reservation.dto';
import { ReservationEntity, ReservationStatus } from 'src/Entity/reservation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationService {
    constructor(@InjectRepository(ReservationEntity) private repo: Repository<ReservationEntity>){}

    async getAllReservations(){
        return await this.repo.find();
    }

    async addReservation(addReservationDTO: AddReservationDto){
            const reservation: ReservationEntity= new ReservationEntity();
            const {reserverName,reserverPhone,reserverEmail,eventDetails,date,time}= addReservationDTO;
    
            reservation.reserverName=reserverName;
            reservation.reserverPhone=reserverPhone;
            reservation.reserverEmail= reserverEmail;
            reservation.eventDetails=eventDetails;
            reservation.date=date;
            reservation.time = time;
            reservation.status=ReservationStatus.upComing;
    
            this.repo.create(reservation);
            try{
                return await this.repo.save(reservation);
            } catch (err) {
                throw new InternalServerErrorException('Something went wrong, item not created.');
            }
    }

    async deleteReservation(id:number){
        try{
            return await this.repo.delete({id});
        } catch(err){
            throw new InternalServerErrorException('Something went wrong');
        }
        
    }

}
