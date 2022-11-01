import { MigrationInterface, QueryRunner } from "typeorm";

export class dbDiari1667338175167 implements MigrationInterface {
    name = 'dbDiari1667338175167'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profile" ("id" int NOT NULL IDENTITY(1,1), "followers" int NOT NULL, "following" int NOT NULL, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "member" ("id" int NOT NULL IDENTITY(1,1), "firstName" nvarchar(255) NOT NULL, "lastName" nvarchar(255) NOT NULL, "profile_id" int NOT NULL, CONSTRAINT "PK_97cbbe986ce9d14ca5894fdc072" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_157ca6e25e9cbd657a2302fb12" ON "member" ("profile_id") WHERE "profile_id" IS NOT NULL`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "FK_157ca6e25e9cbd657a2302fb12d" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "FK_157ca6e25e9cbd657a2302fb12d"`);
        await queryRunner.query(`DROP INDEX "REL_157ca6e25e9cbd657a2302fb12" ON "member"`);
        await queryRunner.query(`DROP TABLE "member"`);
        await queryRunner.query(`DROP TABLE "profile"`);
    }

}
