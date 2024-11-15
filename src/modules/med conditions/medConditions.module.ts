import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalCondition } from 'src/entities/medicalCondition.entity';
import { medConditionsController } from './medConditions.controller';
import { MedConService } from './medConditions.service';
import { MedConRepository } from './medConditions.repository';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalCondition]), UsersModule],
  controllers: [medConditionsController],
  providers: [MedConService, MedConRepository],
})
export class MedicalConditionsModule {}
