import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { Country } from './entities/country.entity';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Mutation(() => Country)
  createCountry(
    @Args('input', { nullable: false })
    input: CreateCountryInput,
  ) {
    return this.countryService.create(input);
  }

  @Query(() => [Country], { name: 'countries' })
  findAll() {
    return this.countryService.findAll();
  }

  @Query(() => Country, { name: 'country' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.countryService.findOne(id);
  }

  @Mutation(() => Country)
  updateCountry(@Args('input') input: UpdateCountryInput) {
    return this.countryService.update(input);
  }

  @Mutation(() => Int, { nullable: true })
  removeCountry(@Args('id', { type: () => Int, nullable: false }) id: number) {
    return this.countryService.remove(id);
  }
}
