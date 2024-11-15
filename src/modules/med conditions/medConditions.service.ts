import { Injectable } from '@nestjs/common';
import { MedConRepository } from './medConditions.repository';
import { medicalConditionDTO } from 'src/dtos/medicalCondition.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class MedConService {
  constructor(
    private readonly medConRepository: MedConRepository,
    private readonly userService: UsersService,
  ) {}

  async getmedCon(page: number, limit: number) {
    return this.medConRepository.getmedCon(page, limit);
  }
  async createMedConditionService(medCondition: medicalConditionDTO) {
    const user = await this.userService.getUserByIdService(medCondition.user);
    console.log(user);
    if (user) return this.medConRepository.createCondition(medCondition, user);
  }
}
