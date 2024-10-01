import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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

  @ApiProperty({
    description: 'campo practica de deporte es obligatoria',
    example: false,
  })
  @IsBoolean()
  practiceSports: boolean;

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
}
