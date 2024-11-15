import { InjectRepository } from '@nestjs/typeorm';
import { medicalConditionDTO } from 'src/dtos/medicalCondition.dto';
import { MedicalCondition } from 'src/entities/medicalCondition.entity';
import { User } from 'src/entities/users.entity';
import { Repository } from 'typeorm';

export class MedConRepository {
  constructor(
    @InjectRepository(MedicalCondition)
    private readonly medConRepository: Repository<MedicalCondition>,
  ) {}

  async getmedCon(page: number, limit: number) {
    return await this.medConRepository.find({
      take: limit,
      skip: (page - 1) * limit,
    });
  }

  async createCondition(medCondition: medicalConditionDTO, user: User) {
    const newMedCondition = this.medConRepository.create({
      name: medCondition.name,
      user: user,
    });
    await this.medConRepository.save(newMedCondition);
    return {
      message: `Nueva condicion medica creada para el usuario ${user.name} ${user?.lastName}`,
      data: newMedCondition,
    };
  }
}
