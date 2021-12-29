import { MigrationInterface, QueryRunner } from 'typeorm';

export class Seed1636893314329 implements MigrationInterface {
  name = 'Seed1636893314329';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "country_treaty" DROP CONSTRAINT "FK_0ff0d4a234014c46946032aa421"`,
    );
    await queryRunner.query(
      `ALTER TABLE "country_treaty" ADD CONSTRAINT "FK_0ff0d4a234014c46946032aa421" FOREIGN KEY ("treaty_id") REFERENCES "treaty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );

    await queryRunner.query(`INSERT INTO public.country (id, "name", population, continent) 
                              VALUES (1, 'Japan', NULL, 'Asia'::country_continent_enum),
                                     (2, 'France', NULL, 'Europe'::country_continent_enum);
                            
                              SELECT setval('country_id_seq', 3)
`);

    await queryRunner.query(`INSERT INTO public.city (id, "name", country_id) 
                              VALUES (1, 'Lyon', 2),
                                    (2, 'Paris', 2),
                                    (3, 'Tokya', 1),
                                    (4, 'Osaka', 1),
                                    (5, 'Kyoto', 1);

                              SELECT setval('city_id_seq', 6) 
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM public.city;`);
    await queryRunner.query(`DELETE FROM public.country;`);
    await queryRunner.query(
      `ALTER TABLE "country_treaty" DROP CONSTRAINT "FK_0ff0d4a234014c46946032aa421"`,
    );
    await queryRunner.query(
      `ALTER TABLE "country_treaty" ADD CONSTRAINT "FK_0ff0d4a234014c46946032aa421" FOREIGN KEY ("treaty_id") REFERENCES "treaty"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }
}
