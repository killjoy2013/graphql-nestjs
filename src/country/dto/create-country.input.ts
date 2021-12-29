import { Continent } from 'src/country/enums';
import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateCountryInput {
  @IsAlpha('tr-TR', {
    message: 'Only letters please...',
  })
  @Field({ nullable: false })
  name: string;

  @Field(() => Int, { nullable: true })
  population: number;

  @Field(() => Continent, { nullable: true })
  continent: Continent;
}
