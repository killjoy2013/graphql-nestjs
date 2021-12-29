import { CreateTreatyInput } from './create-treaty.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTreatyInput extends PartialType(CreateTreatyInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name: string;
}
