import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Capital } from './entities/Capital';
import { City } from './entities/City';
import { Country } from './entities/Country';
import { CountryModule } from './country/country.module';
import { GraphQLModule } from '@nestjs/graphql';

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
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    CountryModule,
  ],
})
export class AppModule {}
