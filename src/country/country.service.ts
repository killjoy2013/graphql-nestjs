import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/entities/City';
import { Country } from 'src/entities/Country';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country) private countryRepo: Repository<Country>,
    @InjectRepository(City) private cityRepo: Repository<City>,
  ) {}

  async findById(id: number): Promise<Country> {
    return await this.countryRepo.findOne(id, { relations: ['cities'] });
  }

  async findByCityId(cityId: number): Promise<Country> {
    let dell = await this.countryRepo
      .createQueryBuilder('co')
      .innerJoin(City, 'ci', 'ci.country_id = co.id')
      .where('ci.id=:cityId', { cityId })
      .getOne();

    console.log('country', dell);

    return dell;
  }

  async add(name: string): Promise<Country> {
    return await this.countryRepo.create({ name }).save();
  }

  async all(): Promise<Country[]> {
    return await this.countryRepo.find({ relations: ['cities', 'capital'] });
  }
}
