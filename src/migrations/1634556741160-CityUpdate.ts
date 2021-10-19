import {MigrationInterface, QueryRunner} from "typeorm";

export class CityUpdate1634556741160 implements MigrationInterface {
    name = 'CityUpdate1634556741160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "city" ALTER COLUMN "touristic" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "city" ALTER COLUMN "population" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "city" ALTER COLUMN "population" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "city" ALTER COLUMN "touristic" SET NOT NULL`);
    }

}
