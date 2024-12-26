/* eslint-disable prettier/prettier */
import { Gender } from 'src/users/entities/gender.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  size_description: string;

  @Column({ type: 'varchar' })
  measurement: string;

  @Column({ type: 'varchar' })
  number: string;

  @ManyToOne(() => Gender, (gender) => gender.size)
  gender: Gender;
}
