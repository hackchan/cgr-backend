import { MigrationInterface, QueryRunner } from 'typeorm'

export class dbDiari1667252658021 implements MigrationInterface {
  name = 'dbDiari1667252658021'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "profile" ("id" int NOT NULL IDENTITY(1,1), "followers" int NOT NULL, "following" int NOT NULL, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "member" ("id" int NOT NULL IDENTITY(1,1), "firstName" nvarchar(255) NOT NULL, "lastName" nvarchar(255) NOT NULL, "profileId" int, CONSTRAINT "PK_97cbbe986ce9d14ca5894fdc072" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE UNIQUE INDEX "REL_b9bb63f508aa958461750fb21d" ON "member" ("profileId") WHERE "profileId" IS NOT NULL')
    await queryRunner.query('ALTER TABLE "member" ADD CONSTRAINT "FK_b9bb63f508aa958461750fb21db" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "member" DROP CONSTRAINT "FK_b9bb63f508aa958461750fb21db"')
    await queryRunner.query('DROP INDEX "REL_b9bb63f508aa958461750fb21d" ON "member"')
    await queryRunner.query('DROP TABLE "member"')
    await queryRunner.query('DROP TABLE "profile"')
  }
}
