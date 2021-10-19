import { registerEnumType } from '@nestjs/graphql';

export enum Continent {
  Asia = 'Asia',
  Europe = 'Europe',
  America = 'America',
}

registerEnumType(Continent, { name: 'Continent' });
