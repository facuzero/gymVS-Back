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
import { MedConService } from './medConditions.service';
import { medicalConditionDTO } from 'src/dtos/medicalCondition.dto';

@ApiTags('medConditions')
@Controller('medConditions')
export class medConditionsController {
  constructor(private readonly medConService: MedConService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Ver condiciones medicas' })
  getmedCon(@Query('page') page: number, @Query('limit') limit: number) {
    return this.medConService.getmedCon(page, limit);
  }

  @Post()
  @ApiOperation({ summary: 'Crear condicion medica' })
  createMedCondition(@Body() medCondition: medicalConditionDTO) {
    return this.medConService.createMedConditionService(medCondition);
  }
}
