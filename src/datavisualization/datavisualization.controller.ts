import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatavisualizationService } from './datavisualization.service';
import { CreateDatavisualizationDto } from './dto/create-datavisualization.dto';

@Controller('datavisualization')
export class DatavisualizationController {
  constructor(private readonly datavisualizationService: DatavisualizationService) { }

  @Post()
  async create(@Body() createDatavisualizationDto: CreateDatavisualizationDto) {
    try {
      return await this.datavisualizationService.create(createDatavisualizationDto);
    } catch (error) {
      console.log(error);
    }
  }

}
