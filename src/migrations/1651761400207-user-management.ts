import { MigrationInterface, QueryRunner } from 'typeorm'

export class userManagement1651761400207 implements MigrationInterface {
  name = 'userManagement1651761400207'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "user_type" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_1f9c6d05869e094dee8fa7d392a" DEFAULT NEWSEQUENTIALID(), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_f70648ef30041d66995a0394afc" UNIQUE ("name"), CONSTRAINT "PK_1f9c6d05869e094dee8fa7d392a" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "user" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_cace4a159ff9f2512dd42373760" DEFAULT NEWSEQUENTIALID(), "name" nvarchar(255) NOT NULL, "last_name" nvarchar(255) NOT NULL, "phone" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "image" nvarchar(255), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_e11e649824a45d8ed01d597fd93" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_80ca6e6ef65fb9ef34ea8c90f42" DEFAULT getdate(), "type_id" uniqueidentifier NOT NULL, CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "auth" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_7e416cf6172bc5aec04244f6459" DEFAULT NEWSEQUENTIALID(), "username" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, "role" ntext NOT NULL CONSTRAINT "DF_7398d6556b440ff388503c5885d" DEFAULT \'\', "user_id" uniqueidentifier NOT NULL, CONSTRAINT "UQ_366ebf23d8f3781bb7bb37abbd1" UNIQUE ("username"), CONSTRAINT "PK_7e416cf6172bc5aec04244f6459" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE UNIQUE INDEX "REL_9922406dc7d70e20423aeffadf" ON "auth" ("user_id") WHERE "user_id" IS NOT NULL')
    await queryRunner.query('ALTER TABLE "user" ADD CONSTRAINT "FK_1f9c6d05869e094dee8fa7d392a" FOREIGN KEY ("type_id") REFERENCES "user_type"("id") ON DELETE CASCADE ON UPDATE CASCADE')
    await queryRunner.query('ALTER TABLE "auth" ADD CONSTRAINT "FK_9922406dc7d70e20423aeffadf3" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "auth" DROP CONSTRAINT "FK_9922406dc7d70e20423aeffadf3"')
    await queryRunner.query('ALTER TABLE "user" DROP CONSTRAINT "FK_1f9c6d05869e094dee8fa7d392a"')
    await queryRunner.query('DROP INDEX "REL_9922406dc7d70e20423aeffadf" ON "auth"')
    await queryRunner.query('DROP TABLE "auth"')
    await queryRunner.query('DROP TABLE "user"')
    await queryRunner.query('DROP TABLE "user_type"')
  }
}
