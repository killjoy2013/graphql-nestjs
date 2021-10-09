import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCapitalInput {
  @Field(() => Int, { nullable: true })
  embassyCount: number;

  @Field(() => Int)
  countryId: number;

  @Field(() => Int)
  cityId: number;
}
