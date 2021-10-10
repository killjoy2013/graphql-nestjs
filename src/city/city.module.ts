import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from 'src/country/country.module';
import { City } from 'src/entities/City';
import { Country } from 'src/entities/Country';
import { CityResolver } from './city.resolver';
import { CityService } from './city.service';

@Module({
  imports: [TypeOrmModule.forFeature([City, Country]), CountryModule],
  providers: [CityService, CityResolver],
})
export class CityModule {}
