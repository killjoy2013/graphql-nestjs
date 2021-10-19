import { CreateCountryInput } from './create-country.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Continent } from '../enums';

@InputType()
export class UpdateCountryInput extends PartialType(CreateCountryInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field(() => Int, { nullable: true })
  population: number;

  @Field(() => Continent, { nullable: true })
  continent: Continent;
}
