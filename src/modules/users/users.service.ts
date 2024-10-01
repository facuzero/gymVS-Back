import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}
  async getUsers(page: number, limit: number): Promise<Partial<User>[]> {
    return this.userRepository.getUsersRepository(page, limit);
  }
}
