import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResolver } from './city.resolver';
import { City } from './entities/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City], 'countrydb')],
  providers: [CityResolver, CityService],
})
export class CityModule {}
