import { Country } from './entities/country.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryResolver } from './country.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Country], 'countrydb')],
  providers: [CountryResolver, CountryService],
})
export class CountryModule {}
