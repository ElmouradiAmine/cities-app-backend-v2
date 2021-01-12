import { CityResponseInterface } from './city-response.interface';
import { CityRepository } from './city.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(CityRepository)
    private cityRepository: CityRepository,
  ) {}

  async getCities(search: string): Promise<CityResponseInterface[]> {
    const cities: City[] = await this.cityRepository.getCities(search);
    const citiesJSON = cities.map((city) => city.toJSON());

    return citiesJSON;
  }
}
