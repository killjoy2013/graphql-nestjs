import { CreateCityInput } from './create-city.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCityInput extends PartialType(CreateCityInput) {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field(() => Int, { nullable: true })
  population: number;

  @Field(() => Int, { nullable: true })
  countryId: number;
}
