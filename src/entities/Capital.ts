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

@Entity()
export class Capital extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true, name: 'embassy_count' })
  embassyCount: number;

  @OneToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @OneToOne(() => Country, (country) => country.capital)
  @JoinColumn({ name: 'country_id' })
  country: Country;
}
