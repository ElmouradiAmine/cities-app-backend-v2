import { CityCategory } from './city-category.enum';
export interface CityResponseInterface {
  name: string;
  postalCode: string;
  category: CityCategory;
}
