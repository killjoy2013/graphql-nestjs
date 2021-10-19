import {MigrationInterface, QueryRunner} from "typeorm";

export class Population1634551318229 implements MigrationInterface {
    name = 'Population1634551318229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "country" ALTER COLUMN "population" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "country" ALTER COLUMN "population" SET NOT NULL`);
    }

}
