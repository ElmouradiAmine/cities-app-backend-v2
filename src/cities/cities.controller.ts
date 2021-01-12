import { CityResponseInterface } from './city-response.interface';
import { Controller, Get, Query } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}
  @Get()
  getAll(@Query('search') search: string): Promise<CityResponseInterface[]> {
    return this.citiesService.getCities(search);
  }
}
