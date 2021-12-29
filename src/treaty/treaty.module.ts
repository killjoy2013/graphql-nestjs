import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TreatyResolver } from './treaty.resolver';
import { Treaty } from './entities/treaty.entity';
import { TreatyService } from './treaty.service';

@Module({
  imports: [TypeOrmModule.forFeature([Treaty], 'countrydb')],
  providers: [TreatyResolver, TreatyService],
})
export class TreatyModule {}
