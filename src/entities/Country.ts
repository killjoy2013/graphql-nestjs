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

@Entity()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Capital)
  @JoinColumn({ name: 'capital_id' })
  capital: Capital;

  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}
