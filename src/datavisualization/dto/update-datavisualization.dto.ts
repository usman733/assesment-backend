import { PartialType } from '@nestjs/mapped-types';
import { CreateDatavisualizationDto } from './create-datavisualization.dto';

export class UpdateDatavisualizationDto extends PartialType(CreateDatavisualizationDto) {}
