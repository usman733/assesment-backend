import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatavisualizationModule } from './datavisualization/datavisualization.module';

@Module({
  imports: [DatavisualizationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
