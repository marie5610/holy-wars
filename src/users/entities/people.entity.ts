/* eslint-disable prettier/prettier */

import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Gender } from './gender.entity';

@Entity()
export class People {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @OneToOne(() => Gender)
  @JoinColumn()
  gender: Gender;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  documentNumber: string;

  @Column({ type: 'varchar' })
  ruc: string;

  @Column({ type: 'varchar' })
  phoneNumber: string;

  @Column({ type: 'long' })
  address: number;
}
