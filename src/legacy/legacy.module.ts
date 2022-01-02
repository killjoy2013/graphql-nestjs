import { Module } from '@nestjs/common';
import { LegacyService } from './legacy.service';
import { LegacyResolver } from './legacy.resolver';

@Module({
  providers: [LegacyService, LegacyResolver]
})
export class LegacyModule {}
