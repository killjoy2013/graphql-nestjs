import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Capital } from 'src/entities/Capital';
import { Repository } from 'typeorm';
import { CreateCapitalInput } from './dto/create.input';

@Injectable()
export class CapitalService {
  constructor(
    @InjectRepository(Capital) private capitalRepo: Repository<Capital>,
  ) {}

  add = async (input: CreateCapitalInput): Promise<Capital> => {
    let created = await this.capitalRepo.save(input);
    return created;
  };
}
