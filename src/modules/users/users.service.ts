import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/entities/users.entity';
import { UsersRepository } from './users.repository';
import {
  CreateClientDto,
  CreateUserDto,
  LoginUserDto,
} from 'src/dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  //USERS
  async getUsers(page: number, limit: number): Promise<Partial<User>[]> {
    return this.userRepository.getUsersRepository(page, limit);
  }

  async getUserByIdService(idUser: string) {
    const userExist = await this.userRepository.getUserByIdRepository(idUser);
    if (userExist) return userExist;
    else throw new NotFoundException('Usuario no encontrado');
  }

  async createUserService(user: CreateUserDto) {
    return this.userRepository.createUserRepository(user);
  }

  async LoginUserService(user: LoginUserDto) {
    return this.userRepository.LoginUserRepository(user);
  }

  //CLIENTS
  async createClientService(user: CreateClientDto) {
    return this.userRepository.createClientRepository(user);
  }
  async listClientService() {
    return this.userRepository.listClients();
  }
}
