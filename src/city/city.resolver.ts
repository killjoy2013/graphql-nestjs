import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { City } from 'src/entities/City';
import { Country } from 'src/entities/Country';
import { CityService } from './city.service';
import { CreateCityInput } from './dto/create.city';

@Resolver(() => City)
export class CityResolver {
  constructor(private cityService: CityService) {}

  @Mutation(() => City)
  async addCity(@Args('input') input: CreateCityInput) {
    return await this.cityService.add(input);
  }

  @Query(() => [City])
  async cities(
    @Args('name', { nullable: true }) name: string,
    @Args('populationMin', { type: () => Int, nullable: true })
    populationMin: number,
    @Args('populationMax', { type: () => Int, nullable: true })
    populationMax: number,
    @Args('touristic', { type: () => Boolean, nullable: true })
    touristic: boolean,
  ) {
    return await this.cityService.find(
      name,
      populationMin,
      populationMax,
      touristic,
    );
  }

  @ResolveField(() => Country)
  async country(@Parent() city: City) {
    return await this.cityService.getCountry(city.id);
  }
}
