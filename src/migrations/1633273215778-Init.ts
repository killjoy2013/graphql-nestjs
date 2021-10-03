import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1633273215778 implements MigrationInterface {
    name = 'Init1633273215778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "country" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "capital_id" integer, CONSTRAINT "REL_41c5975a0339a6879bfcda9596" UNIQUE ("capital_id"), CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "city" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "population" integer, "country_id" integer, CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "capital" ("id" SERIAL NOT NULL, "embassy_count" integer, "city_id" integer, "country_id" integer, CONSTRAINT "REL_69059d99ae3a162cbb082333b3" UNIQUE ("city_id"), CONSTRAINT "REL_c7da045594d54c4b7cfb28e82d" UNIQUE ("country_id"), CONSTRAINT "PK_915c3a0418f4f1fe2eaad2856ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "country" ADD CONSTRAINT "FK_41c5975a0339a6879bfcda9596b" FOREIGN KEY ("capital_id") REFERENCES "capital"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "city" ADD CONSTRAINT "FK_08af2eeb576770524fa05e26f39" FOREIGN KEY ("country_id") REFERENCES "country"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "capital" ADD CONSTRAINT "FK_69059d99ae3a162cbb082333b34" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "capital" ADD CONSTRAINT "FK_c7da045594d54c4b7cfb28e82d4" FOREIGN KEY ("country_id") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "capital" DROP CONSTRAINT "FK_c7da045594d54c4b7cfb28e82d4"`);
        await queryRunner.query(`ALTER TABLE "capital" DROP CONSTRAINT "FK_69059d99ae3a162cbb082333b34"`);
        await queryRunner.query(`ALTER TABLE "city" DROP CONSTRAINT "FK_08af2eeb576770524fa05e26f39"`);
        await queryRunner.query(`ALTER TABLE "country" DROP CONSTRAINT "FK_41c5975a0339a6879bfcda9596b"`);
        await queryRunner.query(`DROP TABLE "capital"`);
        await queryRunner.query(`DROP TABLE "city"`);
        await queryRunner.query(`DROP TABLE "country"`);
    }

}
