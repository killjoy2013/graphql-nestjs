import { UpdateCityInput } from './../city/dto/update-city.input';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
import { Country } from './entities/country.entity';
import { Treaty } from 'src/treaty/entities/treaty.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country, 'countrydb')
    private countryRepo: Repository<Country>,
    @InjectRepository(Treaty, 'countrydb')
    private treatyRepo: Repository<Treaty>,
  ) {}

  async create(input: CreateCountryInput): Promise<Country> {
    return await this.countryRepo.save(input);
  }

  async findAll(): Promise<Country[]> {
    return await this.countryRepo.find({ relations: ['cities', 'treaties'] });
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

  async addToTreaty(countryId: number, treatyId: number): Promise<Country> {
    let foundCountry = await this.countryRepo.findOne(
      { id: countryId },
      { relations: ['treaties'] },
    );
    let foundTreaty = await this.treatyRepo.findOne({ id: treatyId });

    if (foundCountry && foundTreaty) {
      foundCountry.treaties = foundCountry.treaties
        ? [...foundCountry.treaties, foundTreaty]
        : [foundTreaty];

      return this.countryRepo.save(foundCountry);
    } else {
      throw new Error(`Founding country or treaty problem`);
    }
  }

  async removeFromTreaty(
    countryId: number,
    treatyId: number,
  ): Promise<Country> {
    let foundCountry = await this.countryRepo.findOne(
      { id: countryId },
      { relations: ['treaties'] },
    );
    let foundTreaty = await this.treatyRepo.findOne({ id: treatyId });

    if (foundCountry && foundTreaty) {
      foundCountry.treaties = foundCountry.treaties
        ? [...foundCountry.treaties.filter((f) => f.id != treatyId)]
        : [];

      return this.countryRepo.save(foundCountry);
    } else {
      throw new Error(`Founding country or treaty problem`);
    }
  }
}
