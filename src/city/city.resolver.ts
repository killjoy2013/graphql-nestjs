import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CityService } from './city.service';
import { City } from './entities/city.entity';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly cityService: CityService) {}

  @Mutation(() => City)
  createCity(@Args('input') input: CreateCityInput) {
    return this.cityService.create(input);
  }

  @Query(() => [City], { name: 'cities' })
  findAll() {
    return this.cityService.findAll();
  }

  @Query(() => City, { name: 'city' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cityService.findOne(id);
  }

  @Mutation(() => City)
  updateCity(@Args('input') input: UpdateCityInput) {
    return this.cityService.update(input);
  }

  @Mutation(() => Int, { nullable: true })
  removeCity(@Args('id', { type: () => Int, nullable: false }) id: number) {
    return this.cityService.remove(id);
  }
}
