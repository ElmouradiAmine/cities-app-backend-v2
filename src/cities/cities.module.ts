import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { CityRepository } from './city.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CityRepository])],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
