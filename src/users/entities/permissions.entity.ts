/* eslint-disable prettier/prettier */

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class Permissions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  permissionsName: string;

  @ManyToOne(() => Role, (role) => role.permissions)
  role: Role;
}
