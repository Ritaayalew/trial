import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VolunteerEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fullName: string;
    @Column()
    email: string;
    @Column()
    phone: number;
    @Column()
    password: string;
    @Column()
    services: string;
    @Column()
    salt: string;
}