import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    price: number;
    @Column()
    quantity: number;
    @Column()
    category: string;
    @Column() 
    imageUrl: string;
    @Column()
    availability: ItemStatus;
}

export enum ItemStatus{
    available = 'AVAILABLE',
    sold= 'SOLD'
}