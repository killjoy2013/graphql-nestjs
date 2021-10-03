import { Args, Query, Resolver } from '@nestjs/graphql';
import { Country } from 'src/entities/Country';
import { CountryService } from './country.service';

@Resolver((of) => Country)
export class CountryResolver {
  constructor(private countryService: CountryService) {}
  @Query((returns) => Country, { nullable: true })
  async country(@Args('id', { nullable: false }) id: number) {
    return await this.countryService.findCountryById(id);
  }
}
