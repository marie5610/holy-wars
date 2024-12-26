/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { State } from './state.entity';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  language: string;

  @Column({ type: 'varchar' })
  currency: string;

  @OneToMany(() => State, (state) => state.country)
  state: State[];
}
