import { Treaty } from 'src/treaty/entities/treaty.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from './country/country.module';
import { CityModule } from './city/city.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { City } from './city/entities/city.entity';
import { Country } from './country/entities/country.entity';
import { ConfigModule } from '@nestjs/config';
import { TreatyModule } from './treaty/treaty.module';
import { PythonModule } from './python/python.module';
import { PythonRestModule } from './python-rest/python-rest.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
    }),
    TypeOrmModule.forRoot({
      name: 'countrydb',
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [Country, City, Treaty],
      //synchronize: true,
      //logging: true,
    }),

    CountryModule,
    CityModule,
    TreatyModule,
    PythonModule,
    PythonRestModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
