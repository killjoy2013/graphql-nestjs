import { Treaty } from 'src/treaty/entities/treaty.entity';
import { Country } from './entities/country.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryResolver } from './country.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Country, Treaty], 'countrydb')],
  providers: [CountryResolver, CountryService],
})
export class CountryModule {}
