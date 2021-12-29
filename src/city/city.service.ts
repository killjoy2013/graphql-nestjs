import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City, 'countrydb') private cityRepo: Repository<City>,
  ) {}

  async create(input: CreateCityInput): Promise<City> {
    return await this.cityRepo.save(input);
  }

  async findAll(name: string = null): Promise<City[]> {
    if (name !== null) {
      return await this.cityRepo
        .createQueryBuilder('city')
        .where('city.name like :name', { name: `%${name}%` })
        .getMany();
    } else {
      return await this.cityRepo.find();
    }
  }

  async findOne(id: number): Promise<City> {
    return await this.cityRepo.findOne(id);
  }

  async update(input: UpdateCityInput): Promise<City> {
    let found = await this.cityRepo.findOne(input.id);
    return await this.cityRepo.save({ ...found, ...input });
  }

  async remove(id: number) {
    let found = await this.cityRepo.findOne(id);
    if (found) {
      await this.cityRepo.remove(found);
      return id;
    } else {
      return null;
    }
  }
}
