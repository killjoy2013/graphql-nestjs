import { registerEnumType } from '@nestjs/graphql';

export enum Continent {
  Asia = 'Asia',
  Europe = 'Europe',
  America = 'America',
  Africa = 'Africa',
}

registerEnumType(Continent, { name: 'Continent' });
