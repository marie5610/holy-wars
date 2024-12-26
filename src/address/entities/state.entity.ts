/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { City } from './city.entity';
import { Country } from './country.entity';

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  state: string;

  @Column({ type: 'varchar' })
  number: string;

  @OneToMany(() => City, (city) => city.state)
  city: City[];

  @ManyToOne(() => Country, (country) => country.state)
  country: Country;
}
