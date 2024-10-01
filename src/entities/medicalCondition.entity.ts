import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './users.entity';

@Entity({
  name: 'medicalConditions',
})
export class MedicalCondition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  name: string;

  @ManyToOne(() => User, (user) => user.medCondition)
  @JoinColumn({ name: 'userId' })
  user: User;
}
