import { Module } from '@nestjs/common';
import { CapitalService } from './capital.service';
import { CapitalResolver } from './capital.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Capital } from 'src/entities/Capital';

@Module({
  imports: [TypeOrmModule.forFeature([Capital])],
  providers: [CapitalService, CapitalResolver],
})
export class CapitalModule {}
