import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/entities/Country';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country) private countryRepo: Repository<Country>,
  ) {}

  async findCountryById(id: number): Promise<Country> {
    return await this.countryRepo.findOne(id);
  }
}
