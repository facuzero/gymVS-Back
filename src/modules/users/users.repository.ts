import { InjectRepository } from '@nestjs/typeorm';
import { CreateClientDto, CreateUserDto } from 'src/dtos/user.dto';
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

  async createUserRepository(user: CreateUserDto) {
    const newUser = await this.usersRepository.create(user);
    await this.usersRepository.save(newUser);
    return `Usuario agregado: ${newUser.name}`;
  }

  async createClientRepository(user: CreateClientDto) {
    const newClient = await this.usersRepository.create(user);
    await this.usersRepository.save(newClient);
    return `Nuevo cliente agregado: ${newClient.name}`;
  }
}
