import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateCityInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field(() => Int, { nullable: true })
  population: number;

  @Field({ nullable: true })
  touristic: boolean;

  @Field(() => Int, { nullable: true })
  countryId: number;
}
