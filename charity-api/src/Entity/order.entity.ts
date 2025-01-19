import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    phone: number;
    @Column()
    address: string;
    @Column()
    totalPrice: number;
    @Column() 
    items: string;
}