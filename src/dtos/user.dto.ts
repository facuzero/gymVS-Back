import { ApiProperty, ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'El nombre es obligatorio',
    example: 'Victor',
  })
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({
    description: 'La contraseña es obligatoria y minimo 5 caracteres',
    example: 'asd123',
  })
  @IsNotEmpty()
  @IsString()
  @Length(5)
  password: string;

  @ApiProperty({
    description: 'Es cliente?',
    example: false,
  })
  @IsNotEmpty()
  @IsBoolean()
  client: boolean;
}

export class LoginUserDto extends OmitType(CreateUserDto, ['name'] as const) {
  @ApiProperty({
    description: 'El nombre de usuario para el login',
    example: 'Victor',
  })
  name: string;

  @ApiProperty({
    description: 'La contraseña para el login',
    example: 'asd123',
  })
  password: string;
}
export class CreateClientDto {
  @ApiProperty({
    description: 'El nombre es obligatorio',
    example: 'Carlos',
  })
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({
    description: 'El apellido es obligatorio',
    example: 'Olivares',
  })
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  lastName: string;

  @ApiProperty({
    description: 'La direccion es obligatoria',
    example: 'Calle falsa 123',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    description: 'El telefono es obligatorio',
    example: 12345678,
  })
  @IsNotEmpty()
  @IsNumber()
  phone: number;

  @ApiProperty({
    description: 'La edad es obligatoria',
    example: 18,
  })
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiPropertyOptional({
    description: 'La altura es opcional',
    example: 25.6,
  })
  @IsNumber()
  height?: number;

  @ApiPropertyOptional({
    description: 'El tipo de sangre es opcional',
    example: 'AB+',
  })
  @IsString()
  bloodType?: string;

  @ApiPropertyOptional({
    description: 'La patologia en la columna es opcional',
    example: false,
  })
  @IsBoolean()
  spinalPathology?: boolean;

  @ApiPropertyOptional({
    description: 'La enfermedad cardiaca es opcional',
    example: false,
  })
  @IsBoolean()
  heartDisease?: boolean;

  @ApiPropertyOptional({
    description: 'La cirugias reciente es opcional',
    example: false,
  })
  @IsBoolean()
  recentInjuries?: boolean;

  @ApiPropertyOptional({
    description: 'campo practica de deporte es opcional',
    example: false,
  })
  @IsBoolean()
  practiceSports?: boolean;

  @ApiPropertyOptional({
    description: 'campo opcional',
    example: false,
  })
  @IsBoolean()
  experiencesDizziness?: boolean;

  @ApiPropertyOptional({
    description: 'campo opcional',
    example: false,
  })
  @IsBoolean()
  frequentHeadaches: boolean;

  @ApiPropertyOptional({
    description: 'campo opcional',
    example: false,
  })
  @IsBoolean()
  fainting?: boolean;

  @ApiPropertyOptional({
    description: 'campo opcional',
    example: false,
  })
  @IsBoolean()
  nosebleeds?: boolean;

  @ApiPropertyOptional({
    description: 'campo opcional',
    example: false,
  })
  @IsBoolean()
  jointPain?: boolean;

  @ApiPropertyOptional({
    description: 'campo opcional',
    example: false,
  })
  @IsBoolean()
  flatFeet?: boolean;

  @ApiPropertyOptional({
    description: 'campo opcional',
    example: false,
  })
  @IsBoolean()
  seizures?: boolean;

  @ApiPropertyOptional({
    description: 'La imagen es opcional',
    example: 'urlImagen',
  })
  @IsString()
  imgProfile: string;

  @ApiPropertyOptional({
    description: 'Fecha de la cuota, opcional',
    example: new Date(),
  })
  @IsString()
  subscription: Date;

  @ApiProperty({
    description: 'Es cliente?',
    example: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  client: boolean;
}
