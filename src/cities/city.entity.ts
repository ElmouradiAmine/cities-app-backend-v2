import { CityCategory } from './city-category.enum';
import { CityResponseInterface } from './city-response.interface';
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'cities', synchronize: false })
export class City extends BaseEntity {
  @PrimaryColumn()
  codepostal: string;

  @PrimaryColumn()
  codecommune: string;

  @Column()
  nomcommune: string;

  @Column()
  libelleacheminement: string;

  toJSON(): CityResponseInterface {
    return {
      name: this.nomcommune,
      postalCode: this.codepostal,
      category: this.getCategory(),
    };
  }

  private getCategory(): CityCategory {
    if (this.codepostal[0] === '9' && this.codepostal[1] === '7')
      return CityCategory.OUTRE_MER;
    return CityCategory.METROPOLE;
  }
}
