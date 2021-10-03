import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Capital } from './Capital';
import { City } from './City';

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => Capital)
  @OneToOne(() => Capital)
  @JoinColumn({ name: 'capital_id' })
  capital: Capital;

  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}
