import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CityService } from 'src/city/city.service';
import { CityResolver } from 'src/city/city.resolver';
import { City } from 'src/city/entities/city.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([City], 'countrydb'), AuthModule],
  providers: [CityResolver, CityService],
})
export class CityModule {}
