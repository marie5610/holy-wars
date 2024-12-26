/* eslint-disable prettier/prettier */
import { Size } from 'src/products/entities/size.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  description: string;

  @OneToMany(() => Size, (size) => size.gender)
  size: Size[];
}
