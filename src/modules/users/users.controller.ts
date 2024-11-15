import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import {
  CreateClientDto,
  CreateUserDto,
  LoginUserDto,
} from 'src/dtos/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  //USERS
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Listar usuarios' })
  getUsers(@Query('page') page: number, @Query('limit') limit: number) {
    return this.userService.getUsers(page, limit);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Traer un usuario por UUID' })
  getUserById(@Param('id', ParseUUIDPipe) idUser: string) {
    return this.userService.getUserByIdService(idUser);
  }

  @Post()
  @ApiOperation({ summary: 'Crear usuario' })
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUserService(user);
  }

  @Post('login')
  @ApiOperation({ summary: 'iniciar sesion' })
  LoginUser(@Body() user: LoginUserDto) {
    return this.userService.LoginUserService(user);
  }

  //CLIENTS
  @Post('client')
  @ApiOperation({ summary: 'Crear cliente' })
  createClient(@Body() client: CreateClientDto) {
    return this.userService.createClientService(client);
  }

  @Get('client')
  @ApiOperation({ summary: 'listar clientes' })
  getClients() {
    return this.userService.listClientService();
  }
}
