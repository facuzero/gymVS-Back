import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class medicalConditionDTO {
  @ApiProperty({
    description: 'El nombre es obligatorio',
    example: 'Lumbalgia',
  })
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({
    description: 'UUID de usuario',
    example: '3fb0e432-6f59-4e26-a198-ac565aa053bf',
  })
  @IsNotEmpty()
  @IsUUID()
  user: string;
}
