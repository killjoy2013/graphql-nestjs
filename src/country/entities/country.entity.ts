import { Continent } from 'src/country/enums';
import { City } from 'src/city/entities/city.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Treaty } from './../../treaty/entities/treaty.entity';

@Entity()
@ObjectType()
export class Country {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ type: 'int', nullable: true })
  @Field(() => Int, { nullable: true })
  population: number;

  @OneToMany(() => City, (city) => city.country)
  @Field(() => [City], { nullable: true })
  cities: City[];

  @ManyToMany(() => Treaty, (treaty) => treaty.countries, { cascade: true })
  @Field(() => [Treaty], { nullable: true })
  @JoinTable({
    name: 'country_treaty', // table name for the junction table of this relation
    joinColumn: {
      name: 'country_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'treaty_id',
      referencedColumnName: 'id',
    },
  })
  treaties: Treaty[];

  @Field(() => City)
  capital: City;

  @Column({ type: 'enum', enum: Continent, nullable: true })
  @Field(() => Continent, { nullable: true })
  continent: Continent;
}
