import { MigrationInterface, QueryRunner } from 'typeorm';

export class Treaty1634575533665 implements MigrationInterface {
  name = 'Treaty1634575533665';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "treaty" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_7876e417863f6fa3c9a51d0d3eb" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "country_treaty" ("country_id" integer NOT NULL, "treaty_id" integer NOT NULL, CONSTRAINT "PK_3e59c9693b624da2b8779527a10" PRIMARY KEY ("country_id", "treaty_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2010956a26a968fa554b6eb759" ON "country_treaty" ("country_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0ff0d4a234014c46946032aa42" ON "country_treaty" ("treaty_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "country_treaty" ADD CONSTRAINT "FK_2010956a26a968fa554b6eb7598" FOREIGN KEY ("country_id") REFERENCES "country"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "country_treaty" ADD CONSTRAINT "FK_0ff0d4a234014c46946032aa421" FOREIGN KEY ("treaty_id") REFERENCES "treaty"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );

    await queryRunner.query(
      `INSERT INTO "treaty"(name) VALUES ('Kyoto Protocol'),('Paris Agreement'),('Vienna Convention');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "country_treaty" DROP CONSTRAINT "FK_0ff0d4a234014c46946032aa421"`,
    );
    await queryRunner.query(
      `ALTER TABLE "country_treaty" DROP CONSTRAINT "FK_2010956a26a968fa554b6eb7598"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_0ff0d4a234014c46946032aa42"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_2010956a26a968fa554b6eb759"`,
    );
    await queryRunner.query(`DROP TABLE "country_treaty"`);
    await queryRunner.query(`DROP TABLE "treaty"`);
  }
}
