/* eslint-disable prettier/prettier */

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nickName: string;

  @Column({ type: 'varchar' })
  password: string;

  @OneToMany(() => Role, (role) => role.user)
  role: Role[];
}
