import { MigrationInterface, QueryRunner } from 'typeorm'

export class gestionUsuarios1659129284246 implements MigrationInterface {
  name = 'gestionUsuarios1659129284246'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "user_type" ("id" int NOT NULL IDENTITY(1,1), "uuid" uniqueidentifier NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_7362a3b5261934b3257081accf1" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_c15ad3ccd07b0578df73c6cb5b7" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_f70648ef30041d66995a0394afc" UNIQUE ("name"), CONSTRAINT "PK_1f9c6d05869e094dee8fa7d392a" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "uuid" uniqueidentifier NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_e11e649824a45d8ed01d597fd93" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_80ca6e6ef65fb9ef34ea8c90f42" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, "last_name" nvarchar(255) NOT NULL, "phone" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "image" nvarchar(255), "auth_id" int, "type_id" int NOT NULL, CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE UNIQUE INDEX "REL_56d00ec31dc3eed1c3f6bff4f5" ON "user" ("auth_id") WHERE "auth_id" IS NOT NULL')
    await queryRunner.query('CREATE TABLE "auth" ("id" int NOT NULL IDENTITY(1,1), "uuid" uniqueidentifier NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_392eca727f7ab94f76fe3d687f8" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_f9add8546ebede2f8f45002776a" DEFAULT getdate(), "username" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, "role" ntext NOT NULL CONSTRAINT "DF_7398d6556b440ff388503c5885d" DEFAULT \'\', "recovery_token" nvarchar(255), CONSTRAINT "UQ_366ebf23d8f3781bb7bb37abbd1" UNIQUE ("username"), CONSTRAINT "PK_7e416cf6172bc5aec04244f6459" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "tipe_municipio" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_0be4b4691dc61729d528d726c99" UNIQUE ("name"), CONSTRAINT "PK_8f79a78166a715cdf2473e910c4" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "municipio" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "active" bit NOT NULL, "isCapital" bit NOT NULL, "divipola" nvarchar(255) NOT NULL, "latitude" decimal(9,6) CONSTRAINT "DF_5fcd3528f536a91acc7cc0b8289" DEFAULT 0, "longitude" decimal(9,6) CONSTRAINT "DF_4643a498ab62788bec22bfa1ed5" DEFAULT 0, "depart_id" int NOT NULL, "type_id" int, CONSTRAINT "UQ_0f32a8f3380682d7995ebedf3e3" UNIQUE ("name"), CONSTRAINT "UQ_789948902e2dadd9901e22f4ef6" UNIQUE ("divipola"), CONSTRAINT "PK_74346041a3332b7880d76c610f3" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "departamento" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "latitude" decimal(9,6) CONSTRAINT "DF_a5d912d11cff22d50b8d77322af" DEFAULT 0, "longitude" decimal(9,6) CONSTRAINT "DF_82d991900c7cda1012e5b8977fc" DEFAULT 0, "satelital_id" int, CONSTRAINT "UQ_de86deb117d26d969bc0e9ba446" UNIQUE ("name"), CONSTRAINT "PK_7fd6f336280fd0c7a9318464723" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "satelital" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_7788538745df0ec1c4b899c6f97" UNIQUE ("name"), CONSTRAINT "PK_e15f3aff24213f204f25ec06ea7" PRIMARY KEY ("id"))')
    await queryRunner.query('ALTER TABLE "user" ADD CONSTRAINT "FK_56d00ec31dc3eed1c3f6bff4f58" FOREIGN KEY ("auth_id") REFERENCES "auth"("id") ON DELETE CASCADE ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "user" ADD CONSTRAINT "FK_1f9c6d05869e094dee8fa7d392a" FOREIGN KEY ("type_id") REFERENCES "user_type"("id") ON DELETE CASCADE ON UPDATE CASCADE')
    await queryRunner.query('ALTER TABLE "municipio" ADD CONSTRAINT "FK_0eb2c76a4f2ceb67e08934c27d4" FOREIGN KEY ("depart_id") REFERENCES "departamento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "municipio" ADD CONSTRAINT "FK_e3a3f027cd8f4a172a1ccafa573" FOREIGN KEY ("type_id") REFERENCES "tipe_municipio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "departamento" ADD CONSTRAINT "FK_7f36bdde1f71391c4e03ada694d" FOREIGN KEY ("satelital_id") REFERENCES "satelital"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "departamento" DROP CONSTRAINT "FK_7f36bdde1f71391c4e03ada694d"')
    await queryRunner.query('ALTER TABLE "municipio" DROP CONSTRAINT "FK_e3a3f027cd8f4a172a1ccafa573"')
    await queryRunner.query('ALTER TABLE "municipio" DROP CONSTRAINT "FK_0eb2c76a4f2ceb67e08934c27d4"')
    await queryRunner.query('ALTER TABLE "user" DROP CONSTRAINT "FK_1f9c6d05869e094dee8fa7d392a"')
    await queryRunner.query('ALTER TABLE "user" DROP CONSTRAINT "FK_56d00ec31dc3eed1c3f6bff4f58"')
    await queryRunner.query('DROP TABLE "satelital"')
    await queryRunner.query('DROP TABLE "departamento"')
    await queryRunner.query('DROP TABLE "municipio"')
    await queryRunner.query('DROP TABLE "tipe_municipio"')
    await queryRunner.query('DROP TABLE "auth"')
    await queryRunner.query('DROP INDEX "REL_56d00ec31dc3eed1c3f6bff4f5" ON "user"')
    await queryRunner.query('DROP TABLE "user"')
    await queryRunner.query('DROP TABLE "user_type"')
  }
}
