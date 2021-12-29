import { Query, Resolver } from '@nestjs/graphql';
import { PythonService } from './python.service';

@Resolver()
export class PythonResolver {
  constructor(private readonly pythonService: PythonService) {}

  @Query(() => String, { name: 'runScript1' })
  async findAll() {
    return this.pythonService.runScript1();
  }
}
