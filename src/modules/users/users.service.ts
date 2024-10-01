import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/users.entity';
import { UsersRepository } from './users.repository';
import { CreateClientDto, CreateUserDto } from 'src/dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async getUsers(page: number, limit: number): Promise<Partial<User>[]> {
    return this.userRepository.getUsersRepository(page, limit);
  }

  async createUserService(user: CreateUserDto) {
    return this.userRepository.createUserRepository(user);
  }

  async createClientService(user: CreateClientDto) {
    return this.userRepository.createClientRepository(user);
  }
}
