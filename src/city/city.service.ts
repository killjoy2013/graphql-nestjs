import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/entities/City';
import { Country } from 'src/entities/Country';
import { ILike, Repository } from 'typeorm';
import { CreateCityInput } from './dto/create.city';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City) private cityRepo: Repository<City>,
    @InjectRepository(Country) private countryRepo: Repository<Country>,
  ) {}

  async add(input: CreateCityInput) {
    return await this.cityRepo.create(input).save();
  }

  async find(
    name: string,
    populationMin: number,
    populationMax: number,
    touristic: boolean,
  ) {
    let qb = this.cityRepo.createQueryBuilder('city');

    qb = name
      ? qb.andWhere('city.name ilike :name', { name: `%${name}%` })
      : qb;

    qb = populationMax
      ? qb.andWhere('city.population <= :populationMax', { populationMax })
      : qb;

    qb = populationMin
      ? qb.andWhere('city.population >= :populationMin', { populationMin })
      : qb;

    qb =
      touristic != null
        ? qb.andWhere('city.touristic = :touristic', { touristic })
        : qb;

    return await qb.getMany();

    // return await this.cityRepo.find({
    //   where: {
    //     name: ILike(`%${name}%`),
    //   },
    // });
  }
}
