import { LegacyService } from './legacy.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Company } from './dto/legacy.company';

@Resolver()
export class LegacyResolver {
  constructor(private legacyService: LegacyService) {}

  @Query(() => [Company])
  async companies(
    @Args('companyName', { nullable: true }) companyName: string,
  ) {
    return await this.legacyService.findCompanies(companyName);
  }
}
