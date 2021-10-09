import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCityInput {
  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  population: number;

  @Field({ nullable: true })
  touristic: boolean;

  @Field(() => Int, { nullable: true })
  countryId: number;
}
