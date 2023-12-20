import { Module } from '@nestjs/common';
import { DatavisualizationService } from './datavisualization.service';
import { DatavisualizationController } from './datavisualization.controller';


@Module({
  controllers: [DatavisualizationController],
  providers: [DatavisualizationService]
})
export class DatavisualizationModule { }
