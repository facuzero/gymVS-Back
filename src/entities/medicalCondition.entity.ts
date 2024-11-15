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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  name: string;

  @ManyToOne(() => User, (user) => user.medCondition)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
