import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Capital } from './entities/Capital';
import { City } from './entities/City';
import { Country } from './entities/Country';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
