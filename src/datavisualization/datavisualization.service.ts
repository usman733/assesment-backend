import { Injectable } from '@nestjs/common';
import { CreateDatavisualizationDto } from './dto/create-datavisualization.dto';
import { Connection, DataSourceOptions, Repository, createConnection } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class DatavisualizationService {

  constructor(
  ) { }

  private connection: Connection;

  async create(createDatavisualizationDto: CreateDatavisualizationDto) {

    const { host, port, username, password, database, query } = createDatavisualizationDto;

    if (!this.connection) {
      await this.createDatabaseConnection(host, port, username, password, database);
    }

    const data = await this.connection.query(query)

    this.closeDatabaseConnection();
    return data;
  }


  async createDatabaseConnection(host, port, username, password, database): Promise<void> {

    const connectionOptions: DataSourceOptions = {
      type: 'mysql',
      host: host,
      port: port,
      username: username,
      password: password,
      database: database,
      entities: [Order],
      synchronize: true,
    };

    this.connection = await createConnection(connectionOptions);
  }

  closeDatabaseConnection(): void {

    if (this.connection) {
      this.connection.close().then(() => {
        console.log('Database connection closed.');
      });
      this.connection = undefined;
    }

  }
}
