import { UpdateCityInput } from './../city/dto/update-city.input';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country, 'countrydb')
    private countryRepo: Repository<Country>,
  ) {}

  async create(input: CreateCountryInput): Promise<Country> {
    return await this.countryRepo.save(input);
  }

  async findAll(): Promise<Country[]> {
    return await this.countryRepo.find({ relations: ['cities'] });
  }

  async findOne(id: number): Promise<Country> {
    return await this.countryRepo.findOne(id);
  }

  async update(input: UpdateCountryInput): Promise<Country> {
    let found = await this.countryRepo.findOne(input.id);
    return await this.countryRepo.save({ ...found, ...input });
  }

  async remove(id: number) {
    let found = await this.countryRepo.findOne(id);
    if (found) {
      await this.countryRepo.remove(found);
      return id;
    } else {
      return null;
    }
  }
}
