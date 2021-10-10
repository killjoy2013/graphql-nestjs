import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Capital } from './entities/Capital';
import { City } from './entities/City';
import { Country } from './entities/Country';
import { CountryModule } from './country/country.module';
import { GraphQLModule } from '@nestjs/graphql';
import { CityModule } from './city/city.module';
import { CapitalModule } from './capital/capital.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [Country, City, Capital],
      //logging: true,
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
