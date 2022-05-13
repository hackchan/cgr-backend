import { MigrationInterface, QueryRunner } from 'typeorm'

export class gestionUsuarios1652150526842 implements MigrationInterface {
  name = 'gestionUsuarios1652150526842'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "user_type" ("id" int NOT NULL IDENTITY(1,1), "uuid" uniqueidentifier NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_7362a3b5261934b3257081accf1" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_c15ad3ccd07b0578df73c6cb5b7" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_f70648ef30041d66995a0394afc" UNIQUE ("name"), CONSTRAINT "PK_1f9c6d05869e094dee8fa7d392a" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "uuid" uniqueidentifier NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_e11e649824a45d8ed01d597fd93" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_80ca6e6ef65fb9ef34ea8c90f42" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, "last_name" nvarchar(255) NOT NULL, "phone" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "image" nvarchar(255), "auth_id" int, "type_id" int NOT NULL, CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE UNIQUE INDEX "REL_56d00ec31dc3eed1c3f6bff4f5" ON "user" ("auth_id") WHERE "auth_id" IS NOT NULL')
    await queryRunner.query('CREATE TABLE "auth" ("id" int NOT NULL IDENTITY(1,1), "uuid" uniqueidentifier NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_392eca727f7ab94f76fe3d687f8" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_f9add8546ebede2f8f45002776a" DEFAULT getdate(), "username" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, "role" ntext NOT NULL CONSTRAINT "DF_7398d6556b440ff388503c5885d" DEFAULT \'\', CONSTRAINT "UQ_366ebf23d8f3781bb7bb37abbd1" UNIQUE ("username"), CONSTRAINT "PK_7e416cf6172bc5aec04244f6459" PRIMARY KEY ("id"))')
    await queryRunner.query('ALTER TABLE "user" ADD CONSTRAINT "FK_56d00ec31dc3eed1c3f6bff4f58" FOREIGN KEY ("auth_id") REFERENCES "auth"("id") ON DELETE CASCADE ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "user" ADD CONSTRAINT "FK_1f9c6d05869e094dee8fa7d392a" FOREIGN KEY ("type_id") REFERENCES "user_type"("id") ON DELETE CASCADE ON UPDATE CASCADE')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "user" DROP CONSTRAINT "FK_1f9c6d05869e094dee8fa7d392a"')
    await queryRunner.query('ALTER TABLE "user" DROP CONSTRAINT "FK_56d00ec31dc3eed1c3f6bff4f58"')
    await queryRunner.query('DROP TABLE "auth"')
    await queryRunner.query('DROP INDEX "REL_56d00ec31dc3eed1c3f6bff4f5" ON "user"')
    await queryRunner.query('DROP TABLE "user"')
    await queryRunner.query('DROP TABLE "user_type"')
  }
}
