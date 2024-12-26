/* eslint-disable prettier/prettier */

import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { State } from './state.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  street: string;

  @Column({ type: 'varchar' })
  number: string;

  @Column({ type: 'varchar' })
  zipcode: string;

  @OneToOne(() => State)
  @JoinColumn()
  state: State;

  @Column({ type: 'varchar' })
  neighborhood: string;

  @Column({ type: 'varchar' })
  latitude: string;

  @Column({ type: 'varchar' })
  longitude: string;

  @Column({ type: 'varchar' })
  houseNumber: string;

  @Column({ type: 'varchar' })
  referencePoint: string;

  @Column({ type: 'varchar' })
  description: string;
}
