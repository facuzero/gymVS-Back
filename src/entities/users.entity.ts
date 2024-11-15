import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MedicalCondition } from './medicalCondition.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  lastName: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  address: string;

  @Column({ nullable: true })
  phone: number;

  @Column({ nullable: true })
  age: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  height: number;

  @Column({ nullable: true })
  bloodType: string;

  @Column({ nullable: true })
  spinalPathology: boolean;

  @Column({ nullable: true })
  heartDisease: boolean;

  @Column({ nullable: true })
  recentInjuries: boolean;

  @Column({ nullable: true })
  practiceSports: boolean;

  @Column({ type: 'varchar', length: 128, nullable: true })
  password: string;

  @Column({
    type: 'varchar',
    nullable: true,
    default:
      'https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg',
  })
  imgProfile: string;

  @OneToMany(() => MedicalCondition, (condition) => condition.user) // Relación One-to-Many con la entidad Pending
  medCondition: MedicalCondition[];

  @Column({ type: 'date', nullable: true })
  subscription: Date;

  @Column({ type: 'boolean' })
  client: boolean;
}
