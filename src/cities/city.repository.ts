import { EntityRepository, Repository } from 'typeorm';
import { City } from './city.entity';

@EntityRepository(City)
export class CityRepository extends Repository<City> {
  async getCities(search: string): Promise<City[]> {
    const query = City.createQueryBuilder('city');
    if (search) {
      query.andWhere(
        'LOWER(city.codepostal) LIKE LOWER(:search) or LOWER(city.nomcommune) LIKE LOWER(:search)',
        { search: `%${search}%` },
      );
    }
    // query.distinctOn(['city.nomCommune']);
    query.take(100);
    query.orderBy('city.nomCommune', 'ASC');

    const cities = await query.getMany();
    return cities;
  }
}
