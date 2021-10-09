import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from 'src/entities/City';
import { Country } from 'src/entities/Country';
import { CityResolver } from './city.resolver';
import { CityService } from './city.service';

@Module({
  imports: [TypeOrmModule.forFeature([City, Country])],
  providers: [CityService, CityResolver],
})
export class CityModule {}
