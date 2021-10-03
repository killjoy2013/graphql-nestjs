import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { City } from './City';
import { Country } from './Country';

@ObjectType()
@Entity()
export class Capital extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'int', nullable: true, name: 'embassy_count' })
  embassyCount: number;

  @OneToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @OneToOne(() => Country, (country) => country.capital)
  @JoinColumn({ name: 'country_id' })
  country: Country;
}
