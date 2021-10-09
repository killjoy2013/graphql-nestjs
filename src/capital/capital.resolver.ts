import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Capital } from 'src/entities/Capital';
import { CapitalService } from './capital.service';
import { CreateCapitalInput } from './dto/create.input';

@Resolver(() => Capital)
export class CapitalResolver {
  constructor(private capitalService: CapitalService) {}

  @Mutation((returns) => Capital, { name: 'addCapital' })
  async add(@Args('input') input: CreateCapitalInput) {
    return await this.capitalService.add(input);
  }
}
