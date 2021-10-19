import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TreatyService } from './treaty.service';
import { Treaty } from './entities/treaty.entity';
import { CreateTreatyInput } from './dto/create-treaty.input';
import { UpdateTreatyInput } from './dto/update-treaty.input';

@Resolver(() => Treaty)
export class TreatyResolver {
  constructor(private readonly treatyService: TreatyService) {}

  @Mutation(() => Treaty)
  createTreaty(@Args('input') input: CreateTreatyInput) {
    return this.treatyService.create(input);
  }

  @Query(() => [Treaty], { name: 'treaties' })
  findAll() {
    return this.treatyService.findAll();
  }

  @Query(() => Treaty, { name: 'treaty' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.treatyService.findOne(id);
  }

  @Mutation(() => Treaty)
  updateTreaty(@Args('input') input: UpdateTreatyInput) {
    return this.treatyService.update(input);
  }

  @Mutation(() => Treaty)
  removeTreaty(@Args('id', { type: () => Int }) id: number) {
    return this.treatyService.remove(id);
  }
}
