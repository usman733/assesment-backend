import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'order' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  quantity: number;

  @Column()
  price:number;

  @Column()
  month:string;
  
  @Column()
  orderDate:Date;

}
