/* eslint-disable prettier/prettier */

import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permissions } from './permissions.entity';
import { User } from './user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  roleName: string;

  @OneToMany(() => Permissions, (permissions) => permissions.role)
  permissions: Permissions[];

  @ManyToOne(() => User, (user) => user.role)
  user: User;
}
