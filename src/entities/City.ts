import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Country } from './Country';

@ObjectType()
@Entity()
export class City extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  population: number;

  @Field({ nullable: true })
  @Column({ type: 'bool', nullable: true })
  touristic: boolean;

  @ManyToOne(() => Country, (country) => country.cities, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;
}
