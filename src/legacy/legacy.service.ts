import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { Company } from './dto/legacy.company';

@Injectable()
export class LegacyService {
  async findCompanies(companyName: string): Promise<Company[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const entityManager = getManager('legacydb');
        let strQueryCompany = `SELECT id, name, products FROM legacydb.dbo.company WHERE name = @0;`;

        let result = await entityManager.query(strQueryCompany, [companyName]);

        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}
