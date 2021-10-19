import {MigrationInterface, QueryRunner} from "typeorm";

export class CountryContinent1634557977868 implements MigrationInterface {
    name = 'CountryContinent1634557977868'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."country_continent_enum" AS ENUM('Asia', 'Europe', 'America')`);
        await queryRunner.query(`ALTER TABLE "country" ADD "continent" "public"."country_continent_enum"`);
        await queryRunner.query(`ALTER TABLE "city" DROP CONSTRAINT "FK_08af2eeb576770524fa05e26f39"`);
        await queryRunner.query(`ALTER TABLE "city" ALTER COLUMN "country_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "city" ADD CONSTRAINT "FK_08af2eeb576770524fa05e26f39" FOREIGN KEY ("country_id") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "city" DROP CONSTRAINT "FK_08af2eeb576770524fa05e26f39"`);
        await queryRunner.query(`ALTER TABLE "city" ALTER COLUMN "country_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "city" ADD CONSTRAINT "FK_08af2eeb576770524fa05e26f39" FOREIGN KEY ("country_id") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "country" DROP COLUMN "continent"`);
        await queryRunner.query(`DROP TYPE "public"."country_continent_enum"`);
    }

}
