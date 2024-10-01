import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateClientDto, CreateUserDto } from 'src/dtos/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Listar usuarios' })
  getUsers(@Query('page') page: number, @Query('limit') limit: number) {
    return this.userService.getUsers(page, limit);
  }

  @Post()
  @ApiOperation({ summary: 'Crear usuario' })
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUserService(user);
  }

  @Post('client')
  @ApiOperation({ summary: 'Crear cliente' })
  createClient(@Body() client: CreateClientDto) {
    return this.userService.createClientService(client);
  }
}
