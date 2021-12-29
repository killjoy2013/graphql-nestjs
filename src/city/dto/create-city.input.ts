import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCityInput {
  @Field({ nullable: false })
  name: string;

  @Field(() => Int, { nullable: true })
  population: number;

  @Field(() => Int, { nullable: false })
  countryId: number;
}
