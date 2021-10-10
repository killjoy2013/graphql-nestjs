import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Country } from 'src/entities/Country';
import { CountryService } from './country.service';

@Resolver((of) => Country)
export class CountryResolver {
  constructor(private countryService: CountryService) {}

  @Query((returns) => Country, { nullable: true })
  async country(@Args('id', { nullable: false }) id: number) {
    return await this.countryService.findById(id);
  }

  @Query(() => [Country])
  async countries() {
    return await this.countryService.all();
  }

  @Mutation((returns) => Country)
  async addCountry(@Args('name', { nullable: false }) name: string) {
    return await this.countryService.add(name);
  }
}
