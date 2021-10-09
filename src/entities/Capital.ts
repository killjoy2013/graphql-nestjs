import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
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

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true, name: 'embassy_count' })
  embassyCount: number;

  @Field(() => City)
  @OneToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @OneToOne(() => Country, (country) => country.capital, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;
}
