import { Treaty } from './entities/treaty.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTreatyInput } from './dto/create-treaty.input';
import { UpdateTreatyInput } from './dto/update-treaty.input';

@Injectable()
export class TreatyService {
  constructor(
    @InjectRepository(Treaty, 'countrydb')
    private treatyRepo: Repository<Treaty>,
  ) {}

  async create(input: CreateTreatyInput): Promise<Treaty> {
    return await this.treatyRepo.save(input);
  }

  async findAll(): Promise<Treaty[]> {
    return await this.treatyRepo.find({ relations: ['countries'] });
  }

  async findOne(id: number): Promise<Treaty> {
    return await this.treatyRepo.findOne(id);
  }

  async update(input: UpdateTreatyInput): Promise<Treaty> {
    let found = await this.treatyRepo.findOne(input.id);
    return await this.treatyRepo.save({ ...found, ...input });
  }

  async remove(id: number) {
    let found = await this.treatyRepo.findOne(id);
    if (found) {
      await this.treatyRepo.remove(found);
      return id;
    } else {
      return null;
    }
  }
}
