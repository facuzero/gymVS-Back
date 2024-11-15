import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateClientDto,
  CreateUserDto,
  LoginUserDto,
} from 'src/dtos/user.dto';
import { User } from 'src/entities/users.entity';
import { Repository } from 'typeorm';

export class UsersRepository {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  //USERS
  async getUsersRepository(
    page: number,
    limit: number,
  ): Promise<Partial<User>[]> {
    return await this.usersRepository.find({
      select: ['name', 'client'], // Solo seleccionamos el campo `name`
      take: limit,
      skip: (page - 1) * limit,
      where: { client: false },
    });
  }

  async getUserByIdRepository(idUser: string) {
    console.log(idUser);
    return await this.usersRepository.findOne({ where: { id: idUser } });
  }

  async createUserRepository(user: CreateUserDto) {
    const newUser = await this.usersRepository.create(user);
    await this.usersRepository.save(newUser);
    return `Usuario agregado: ${newUser.name}`;
  }

  async LoginUserRepository(user: LoginUserDto): Promise<object> {
    const userLogin = await this.usersRepository.findOne({
      where: {
        name: user.name,
        password: user.password,
      },
    });
    if (userLogin) {
      return {
        user: user.name,
        status: 'OK',
      };
    } else throw new NotFoundException('Usuario o contraseña incorrecta');
  }

  //CLIENTS
  async createClientRepository(user: CreateClientDto) {
    const newClient = await this.usersRepository.create(user);
    await this.usersRepository.save(newClient);
    return `Nuevo cliente agregado: ${newClient.name}`;
  }

  async listClients() {
    return this.usersRepository.find({
      where: { client: true },
    });
  }
}
