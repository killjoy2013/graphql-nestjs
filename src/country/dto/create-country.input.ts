import { Continent } from './../enums';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCountryInput {
  @Field({ nullable: false })
  name: string;

  @Field(() => Int, { nullable: true })
  population: number;

  @Field(() => Continent, { nullable: true })
  continent: Continent;
}
