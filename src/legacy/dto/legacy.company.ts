import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  products: string;
}
