import {MigrationInterface, QueryRunner} from "typeorm";

export class CityTouristic1633273654413 implements MigrationInterface {
    name = 'CityTouristic1633273654413'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "city" ADD "touristic" boolean`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "city" DROP COLUMN "touristic"`);
    }

}
