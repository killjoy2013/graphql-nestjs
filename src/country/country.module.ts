import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from 'src/entities/City';
import { Country } from 'src/entities/Country';
import { CountryResolver } from './country.resolver';
import { CountryService } from './country.service';

@Module({
  imports: [TypeOrmModule.forFeature([Country, City])],
  providers: [CountryResolver, CountryService],
  exports: [CountryService],
})
export class CountryModule {}
