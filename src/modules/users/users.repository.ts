import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/users.entity';
import { Repository } from 'typeorm';

export class UsersRepository {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  async getUsersRepository(page: number, limit: number) {
    return await this.usersRepository.find({
      take: limit,
      skip: (page - 1) * limit,
    });
  }
}
