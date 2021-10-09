import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Capital } from './entities/Capital';
import { City } from './entities/City';
import { Country } from './entities/Country';
import { CountryModule } from './country/country.module';
import { GraphQLModule } from '@nestjs/graphql';
import { CityModule } from './city/city.module';
import { CapitalModule } from './capital/capital.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'countrydb',
      username: 'postgres',
      password: 'postgres',
      entities: [Country, City, Capital],
      logging: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    CountryModule,
    CityModule,
    CapitalModule,
  ],
})
export class AppModule {}
