import {MigrationInterface, QueryRunner} from "typeorm";

export class Africa1636967413917 implements MigrationInterface {
    name = 'Africa1636967413917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."country_continent_enum" RENAME TO "country_continent_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."country_continent_enum" AS ENUM('Asia', 'Europe', 'America', 'Africa')`);
        await queryRunner.query(`ALTER TABLE "country" ALTER COLUMN "continent" TYPE "public"."country_continent_enum" USING "continent"::"text"::"public"."country_continent_enum"`);
        await queryRunner.query(`DROP TYPE "public"."country_continent_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."country_continent_enum_old" AS ENUM('Asia', 'Europe', 'America')`);
        await queryRunner.query(`ALTER TABLE "country" ALTER COLUMN "continent" TYPE "public"."country_continent_enum_old" USING "continent"::"text"::"public"."country_continent_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."country_continent_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."country_continent_enum_old" RENAME TO "country_continent_enum"`);
    }

}
