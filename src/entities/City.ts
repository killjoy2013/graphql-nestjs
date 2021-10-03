import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Country } from './Country';

@Entity()
export class City extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int', nullable: true })
  population: number;

  @Column({ type: 'bool', nullable: true })
  touristic: boolean;

  @ManyToOne(() => Country, (country) => country.cities, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;
}
