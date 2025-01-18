import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReservationEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    reserverName: string;
    @Column()
    reserverPhone: number;
    @Column()
    reserverEmail: string;
    @Column()
    eventDetails: string;
    @Column()
    date: string;
    @Column()
    time: string;
    @Column()
    status: ReservationStatus;
}

export enum ReservationStatus{
    upComing = 'UPCOMING',
    celebrated= 'CELEBRATED'
}