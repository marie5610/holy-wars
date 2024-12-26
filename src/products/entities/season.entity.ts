/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Season {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  seasonName: string;

  @Column({ type: 'date' })
  date: Date;
}
