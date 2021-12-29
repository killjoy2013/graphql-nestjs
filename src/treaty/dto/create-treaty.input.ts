import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTreatyInput {
  @Field()
  name: string;
}
