import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MedicalCondition } from './medicalCondition.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  address: string;

  @Column({
    nullable: true,
  })
  phone: number;

  @Column({
    nullable: true,
  })
  age: number;

  @Column({
    nullable: true,
  })
  height: number;

  @Column({
    nullable: true,
  })
  bloodType: string;

  @Column({
    nullable: true,
  })
  spinalPathology: string;

  @Column({
    nullable: true,
  })
  heartDisease: string;

  @Column({
    nullable: true,
  })
  recentInjuries: string;

  @Column({
    nullable: true,
  })
  practiceSports: string;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: false,
    default:
      'https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg',
  })
  imgProfile: string;

  @OneToMany(() => MedicalCondition, (condition) => condition.user) // Relación One-to-Many con la entidad Pending
  medCondition: MedicalCondition[];
}
