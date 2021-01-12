import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('DB_HOST') || 'localhost',
      port: this.configService.get('DB_PORT') || 5432,
      username: this.configService.get('DB_USERNAME') || 'postgres',
      password: this.configService.get('DB_PASSWORD') || 'postgres',
      database: this.configService.get('DB_DATABASE') || 'citiesdb',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],

      synchronize: false,
    };
  }
}
