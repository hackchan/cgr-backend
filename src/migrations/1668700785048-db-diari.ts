import { MigrationInterface, QueryRunner } from 'typeorm'

export class dbDiari1668700785048 implements MigrationInterface {
  name = 'dbDiari1668700785048'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "user_type" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_f70648ef30041d66995a0394afc" UNIQUE ("name"), CONSTRAINT "PK_1f9c6d05869e094dee8fa7d392a" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "role" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "categoria" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_9945c4fc84463a0c5a1a5651a83" UNIQUE ("name"), CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "email" ("id" int NOT NULL IDENTITY(1,1), "email" nvarchar(255) NOT NULL, "register" bit NOT NULL, "entidad_id" int NOT NULL, CONSTRAINT "UQ_fee9013b697946e8129caba8983" UNIQUE ("email"), CONSTRAINT "PK_1e7ed8734ee054ef18002e29b1c" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "sector" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "initial" nvarchar(255) NOT NULL, CONSTRAINT "UQ_23e1125a0a0e6b06d3e825ba990" UNIQUE ("name"), CONSTRAINT "UQ_962e5546704a554a94991b7b6ea" UNIQUE ("initial"), CONSTRAINT "PK_668b2ea8a2f534425407732f3ab" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "subsector" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "sector_id" int NOT NULL, CONSTRAINT "PK_4794e38ae081bb0fad21493b4ca" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "telefono" ("id" int NOT NULL IDENTITY(1,1), "numero" nvarchar(255) NOT NULL, "contacto" nvarchar(255), "cargo" nvarchar(255), "entidad_id" int NOT NULL, CONSTRAINT "UQ_3c5d11e0890dc44ab81868640eb" UNIQUE ("numero"), CONSTRAINT "PK_58f2dfd7044b4f5e50a1827c756" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "satelital" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_7788538745df0ec1c4b899c6f97" UNIQUE ("name"), CONSTRAINT "PK_e15f3aff24213f204f25ec06ea7" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "departamento" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "latitude" decimal(9,6) CONSTRAINT "DF_a5d912d11cff22d50b8d77322af" DEFAULT 0, "longitude" decimal(9,6) CONSTRAINT "DF_82d991900c7cda1012e5b8977fc" DEFAULT 0, "satelital_id" int, CONSTRAINT "UQ_de86deb117d26d969bc0e9ba446" UNIQUE ("name"), CONSTRAINT "PK_7fd6f336280fd0c7a9318464723" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "municipio_type" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_2f66b525870ffdc45a7c9e89249" UNIQUE ("name"), CONSTRAINT "PK_e3a3f027cd8f4a172a1ccafa573" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "estado_obra" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_24af99705aa2c85df51bc93ca76" UNIQUE ("name"), CONSTRAINT "PK_f9f78b6a47ec7626e5bdb088f43" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "sector_obra" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_737ef5229e5153b5cdce670ee5d" UNIQUE ("name"), CONSTRAINT "PK_4f5dd63f78216304fa47a45a2ca" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "origen_recurso" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_e555111d7d289cd352402680188" UNIQUE ("name"), CONSTRAINT "PK_dfa0d6293ceca417fea8b944198" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "tipo_soporte" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_e7a23712deb747c375ce976c4c3" UNIQUE ("name"), CONSTRAINT "PK_42cf01f74bbfb2f10eb30dfef6a" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "soportes_obras" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "obra_id" int NOT NULL, "tipo_soporte_id" int NOT NULL, CONSTRAINT "PK_ea81883e5eee7f97860648d946a" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "matriz_obra" ("id" int NOT NULL IDENTITY(1,1), "id_bpin" nvarchar(255) NOT NULL, "id_contrato" nvarchar(255) NOT NULL, "nombre_proyecto" nvarchar(255) NOT NULL, "objeto_proyecto" nvarchar(255) NOT NULL, "unidad_funcional_acuerdo_obra" nvarchar(255) NOT NULL CONSTRAINT "DF_ae40e1a5e96e7af7f3e13b20dfd" DEFAULT \'N/A\', "fecha_suscripcion" date NOT NULL, "fecha_inicio" date NOT NULL CONSTRAINT "DF_b946cb9f90d01c6b3be1df6d494" DEFAULT \'1900-01-01\', "fecha_programada_terminacion" date NOT NULL CONSTRAINT "DF_82f768b22815a70b65335b7f9cc" DEFAULT \'1900-01-01\', "fecha_terminacion" date NOT NULL CONSTRAINT "DF_4eb90d063b4bb7e2d1a25f087f2" DEFAULT \'1900-01-01\', "valor_contrato_inicial" decimal(19,2) NOT NULL CONSTRAINT "DF_890f631cea078512ad16ec19d6d" DEFAULT 0, "valor_contrato_final" decimal(19,2) NOT NULL CONSTRAINT "DF_55e5e6990ef4c5c31be640f6f61" DEFAULT 0, "avance_fisico_programado" decimal(4,2) NOT NULL CONSTRAINT "DF_4f21dca1aaa9ca8f63e34988993" DEFAULT 0, "avance_fisico_ejecutado" decimal(4,2) NOT NULL CONSTRAINT "DF_dfab196def4d54c615f445dc813" DEFAULT 0, "avance_financiero_ejecutado" decimal(4,2) NOT NULL CONSTRAINT "DF_248fb388787cd1b6a1b3829d347" DEFAULT 0, "nro_contrato" nvarchar(255) NOT NULL, "cantidad_de_suspensiones" int NOT NULL CONSTRAINT "DF_567ed5bb1ca6942f50118503a8a" DEFAULT 0, "cantidad_de_prorrogas" int NOT NULL CONSTRAINT "DF_2aa7d59114bf266b01dbc92d523" DEFAULT 0, "tiempo_suspensiones" int NOT NULL CONSTRAINT "DF_9f6457af7dbe6673e353e51f07c" DEFAULT 0, "tiempo_prorrogas" int NOT NULL CONSTRAINT "DF_7ced9dca8c409f076e9ff32c2dc" DEFAULT 0, "cantidad_adiciones" int NOT NULL CONSTRAINT "DF_85629c3cc4c3327b07e1780ff33" DEFAULT 0, "valor_total_adiciones" decimal(19,2) NOT NULL CONSTRAINT "DF_c5f609d4138c5c8c1333c6f3661" DEFAULT 0, "valor_comprometido" decimal(19,2) NOT NULL CONSTRAINT "DF_1d27261515359be446cb983bc35" DEFAULT 0, "valor_obligado" decimal(19,2) NOT NULL CONSTRAINT "DF_0bebfcd142617c07998a1a0b734" DEFAULT 0, "valor_pagado" decimal(19,2) NOT NULL CONSTRAINT "DF_4b3b449d72f1496631f63015134" DEFAULT 0, "valor_anticipo" decimal(19,2) CONSTRAINT "DF_e24289369de10ea9037ca2cf086" DEFAULT 0, "razon_social_contratista" nvarchar(255) NOT NULL, "id_contratista" nvarchar(255) NOT NULL, "razon_social_nuevo_contratista" nvarchar(255), "id_nuevo_contratista" nvarchar(255), "observaciones" nvarchar(255) NOT NULL CONSTRAINT "DF_93f58e3cd6c5a09dde5092fde84" DEFAULT \'N/A\', "link_secop" nvarchar(255) NOT NULL CONSTRAINT "DF_ac4cd9e0cfc2bdf04ec746a6e0f" DEFAULT \'N/A\', "nro_contrato_interventoria" nvarchar(255) NOT NULL, "nombre_interventoria" nvarchar(255) NOT NULL, "id_interventoria" nvarchar(255) NOT NULL, "dia_corte" int NOT NULL, "mes_corte" int NOT NULL, "anio_corte" int NOT NULL, "alerta" bit, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_223f5f405921ce741e06707ab9d" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_119fcea1aea3a2033a7096d6171" DEFAULT getdate(), "user_alerta" int, "sector" int NOT NULL, "origen" int NOT NULL, "estado" int NOT NULL, "entidad_id" int NOT NULL, "municipio_obra" int NOT NULL, "user_operation" int, CONSTRAINT "matrizObra_unique" UNIQUE ("id_contrato", "entidad_id"), CONSTRAINT "PK_0888f5665edd3c0241fb162c790" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "estrato" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_bb39aeb63ef9f4fbe854be74a05" UNIQUE ("name"), CONSTRAINT "PK_fa08e7bf4cda613cc3db2ccfb9d" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "document_type" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_d63f0a80a96310fe1e9657795ff" UNIQUE ("name"), CONSTRAINT "PK_2e1aa55eac1947ddf3221506edb" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "matriz_ies" ("id" int NOT NULL IDENTITY(1,1), "semestre_reportado" int NOT NULL, "codigo" nvarchar(255) NOT NULL, "nombre_estudiante" nvarchar(255) NOT NULL, "no_documento" nvarchar(255) NOT NULL, "programa" nvarchar(255) NOT NULL, "semestre_ingreso" int NOT NULL, "valor_semestre_sin_descuentos" decimal(19,2) NOT NULL CONSTRAINT "DF_72614549a6a3f8dcb9049b7afee" DEFAULT 0, "recargo" decimal(19,2) NOT NULL CONSTRAINT "DF_efdb1792622728311226db07490" DEFAULT 0, "descuentos" decimal(19,2) NOT NULL CONSTRAINT "DF_533b81ec7641baebcb6d8147374" DEFAULT 0, "tipo_de_descuento" nvarchar(255) NOT NULL CONSTRAINT "DF_2891595a07bc94206d38d12f2ce" DEFAULT \'NO APLICA\', "creditos_semestre" int NOT NULL CONSTRAINT "DF_3dccf02e39030d54dae7da16a3f" DEFAULT 1, "dia_corte" int, "mes_corte" int, "anio_corte" int, "alerta" bit, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_f6d7d13572bdf6df75f53dcf2b7" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_88b7f13b49807e9c851ebef8762" DEFAULT getdate(), "tipo_documento" int NOT NULL, "sede" int NOT NULL, "residencia" int NOT NULL, "estrato" int NOT NULL, "user_alerta" int, "entidad_id" int NOT NULL, "user_operation" int, CONSTRAINT "matrizIes_unique" UNIQUE ("codigo", "entidad_id", "semestre_reportado"), CONSTRAINT "PK_d366d40aa199f62111986c74b51" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "municipio" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "active" bit NOT NULL, "isCapital" bit NOT NULL, "divipola" nvarchar(255) NOT NULL, "latitude" decimal(9,6) CONSTRAINT "DF_5fcd3528f536a91acc7cc0b8289" DEFAULT 0, "longitude" decimal(9,6) CONSTRAINT "DF_4643a498ab62788bec22bfa1ed5" DEFAULT 0, "depart_id" int NOT NULL, "type_id" int, CONSTRAINT "UQ_789948902e2dadd9901e22f4ef6" UNIQUE ("divipola"), CONSTRAINT "PK_74346041a3332b7880d76c610f3" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "entidad_control" ("id" int NOT NULL IDENTITY(1,1), "nit" nvarchar(255) NOT NULL, "name" nvarchar(255) NOT NULL, "doctec" bit, "cgn" nvarchar(255), "active" bit CONSTRAINT "DF_cf700b6623d8697de20b1329455" DEFAULT 0, "categoria_id" int, "subsector_id" int NOT NULL, "municipio_id" int NOT NULL, CONSTRAINT "UQ_5a32fe49fce8b3ddeafe3608698" UNIQUE ("nit"), CONSTRAINT "PK_4ccd2862deb3f64fa3fac923f22" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "uuid" uniqueidentifier NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_e11e649824a45d8ed01d597fd93" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_80ca6e6ef65fb9ef34ea8c90f42" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, "last_name" nvarchar(255) NOT NULL, "phone" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "image" nvarchar(255), "active" bit NOT NULL CONSTRAINT "DF_843f46779f60b45032874be95b3" DEFAULT 0, "auth_id" int NOT NULL, "type_id" int NOT NULL, CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE UNIQUE INDEX "REL_56d00ec31dc3eed1c3f6bff4f5" ON "user" ("auth_id") WHERE "auth_id" IS NOT NULL')
    await queryRunner.query('CREATE TABLE "auth" ("id" int NOT NULL IDENTITY(1,1), "uuid" uniqueidentifier NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_392eca727f7ab94f76fe3d687f8" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_f9add8546ebede2f8f45002776a" DEFAULT getdate(), "username" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, "apikey" nvarchar(255), "recovery_token" nvarchar(255), CONSTRAINT "UQ_366ebf23d8f3781bb7bb37abbd1" UNIQUE ("username"), CONSTRAINT "PK_7e416cf6172bc5aec04244f6459" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "semestre" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_019cc34c28b75b91a289b867730" UNIQUE ("name"), CONSTRAINT "PK_1e3b225e8f25f6f8d91009afb70" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "user_roles_role" ("userId" int NOT NULL, "roleId" int NOT NULL, CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("userId", "roleId"))')
    await queryRunner.query('CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") ')
    await queryRunner.query('CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") ')
    await queryRunner.query('CREATE TABLE "user_entidades_entidad_control" ("userId" int NOT NULL, "entidadControlId" int NOT NULL, CONSTRAINT "PK_24fcf29cd6aad5b19f7d39fdcaf" PRIMARY KEY ("userId", "entidadControlId"))')
    await queryRunner.query('CREATE INDEX "IDX_ad084e416f78ef0cab7b4379fe" ON "user_entidades_entidad_control" ("userId") ')
    await queryRunner.query('CREATE INDEX "IDX_9e92c96f814db420b92134ce92" ON "user_entidades_entidad_control" ("entidadControlId") ')
    await queryRunner.query('ALTER TABLE "email" ADD CONSTRAINT "FK_2db6bade8788da5fd17069c36ce" FOREIGN KEY ("entidad_id") REFERENCES "entidad_control"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "subsector" ADD CONSTRAINT "FK_5938a3230836df6605ed4aef1ed" FOREIGN KEY ("sector_id") REFERENCES "sector"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "telefono" ADD CONSTRAINT "FK_3d5eac338d344c315a4928329f4" FOREIGN KEY ("entidad_id") REFERENCES "entidad_control"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "departamento" ADD CONSTRAINT "FK_7f36bdde1f71391c4e03ada694d" FOREIGN KEY ("satelital_id") REFERENCES "satelital"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "soportes_obras" ADD CONSTRAINT "FK_6fbff81ded510ee3f15d2ea8533" FOREIGN KEY ("obra_id") REFERENCES "matriz_obra"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "soportes_obras" ADD CONSTRAINT "FK_5e42915463b40471989b76a1d34" FOREIGN KEY ("tipo_soporte_id") REFERENCES "tipo_soporte"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_obra" ADD CONSTRAINT "FK_9b37dcb5395db61224c4e6cb4dc" FOREIGN KEY ("user_alerta") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_obra" ADD CONSTRAINT "FK_11d8f876229a1dc118ccce979f3" FOREIGN KEY ("sector") REFERENCES "sector_obra"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_obra" ADD CONSTRAINT "FK_f1df0c98a4a1a186a2d0e85b231" FOREIGN KEY ("origen") REFERENCES "origen_recurso"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_obra" ADD CONSTRAINT "FK_5028b7ffb26ce767edfa2dee6d8" FOREIGN KEY ("estado") REFERENCES "estado_obra"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_obra" ADD CONSTRAINT "FK_0e22703338b984321b3df041073" FOREIGN KEY ("entidad_id") REFERENCES "entidad_control"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_obra" ADD CONSTRAINT "FK_2539b79df941e170d36746821c4" FOREIGN KEY ("municipio_obra") REFERENCES "municipio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_obra" ADD CONSTRAINT "FK_1933ace031c5ada4cb55b81353d" FOREIGN KEY ("user_operation") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_ies" ADD CONSTRAINT "FK_660f386908746641e51f983f75d" FOREIGN KEY ("tipo_documento") REFERENCES "document_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_ies" ADD CONSTRAINT "FK_abe97cd61fbfeecaa0fb30f0bec" FOREIGN KEY ("sede") REFERENCES "municipio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_ies" ADD CONSTRAINT "FK_37f5db398a48eaa1e81ad8f48a3" FOREIGN KEY ("residencia") REFERENCES "municipio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_ies" ADD CONSTRAINT "FK_21a0dff90c3ccbceb5d5ce9560a" FOREIGN KEY ("estrato") REFERENCES "estrato"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_ies" ADD CONSTRAINT "FK_8c709b305bc706c8f2c955a621d" FOREIGN KEY ("user_alerta") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_ies" ADD CONSTRAINT "FK_6bff81dcfd79d17b0119a4f00d1" FOREIGN KEY ("entidad_id") REFERENCES "entidad_control"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "matriz_ies" ADD CONSTRAINT "FK_21a98334911616294e256a48326" FOREIGN KEY ("user_operation") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "municipio" ADD CONSTRAINT "FK_0eb2c76a4f2ceb67e08934c27d4" FOREIGN KEY ("depart_id") REFERENCES "departamento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "municipio" ADD CONSTRAINT "FK_e3a3f027cd8f4a172a1ccafa573" FOREIGN KEY ("type_id") REFERENCES "municipio_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "entidad_control" ADD CONSTRAINT "FK_71e5248d6fca7531bb79e4e1963" FOREIGN KEY ("categoria_id") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "entidad_control" ADD CONSTRAINT "FK_77711160f6be60889be8fde5685" FOREIGN KEY ("subsector_id") REFERENCES "subsector"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "entidad_control" ADD CONSTRAINT "FK_05ca22513e9d938d51b931c38eb" FOREIGN KEY ("municipio_id") REFERENCES "municipio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "user" ADD CONSTRAINT "FK_56d00ec31dc3eed1c3f6bff4f58" FOREIGN KEY ("auth_id") REFERENCES "auth"("id") ON DELETE CASCADE ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "user" ADD CONSTRAINT "FK_1f9c6d05869e094dee8fa7d392a" FOREIGN KEY ("type_id") REFERENCES "user_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_5f9286e6c25594c6b88c108db77" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE')
    await queryRunner.query('ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_4be2f7adf862634f5f803d246b8" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "user_entidades_entidad_control" ADD CONSTRAINT "FK_ad084e416f78ef0cab7b4379fe1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE')
    await queryRunner.query('ALTER TABLE "user_entidades_entidad_control" ADD CONSTRAINT "FK_9e92c96f814db420b92134ce92b" FOREIGN KEY ("entidadControlId") REFERENCES "entidad_control"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "user_entidades_entidad_control" DROP CONSTRAINT "FK_9e92c96f814db420b92134ce92b"')
    await queryRunner.query('ALTER TABLE "user_entidades_entidad_control" DROP CONSTRAINT "FK_ad084e416f78ef0cab7b4379fe1"')
    await queryRunner.query('ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_4be2f7adf862634f5f803d246b8"')
    await queryRunner.query('ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_5f9286e6c25594c6b88c108db77"')
    await queryRunner.query('ALTER TABLE "user" DROP CONSTRAINT "FK_1f9c6d05869e094dee8fa7d392a"')
    await queryRunner.query('ALTER TABLE "user" DROP CONSTRAINT "FK_56d00ec31dc3eed1c3f6bff4f58"')
    await queryRunner.query('ALTER TABLE "entidad_control" DROP CONSTRAINT "FK_05ca22513e9d938d51b931c38eb"')
    await queryRunner.query('ALTER TABLE "entidad_control" DROP CONSTRAINT "FK_77711160f6be60889be8fde5685"')
    await queryRunner.query('ALTER TABLE "entidad_control" DROP CONSTRAINT "FK_71e5248d6fca7531bb79e4e1963"')
    await queryRunner.query('ALTER TABLE "municipio" DROP CONSTRAINT "FK_e3a3f027cd8f4a172a1ccafa573"')
    await queryRunner.query('ALTER TABLE "municipio" DROP CONSTRAINT "FK_0eb2c76a4f2ceb67e08934c27d4"')
    await queryRunner.query('ALTER TABLE "matriz_ies" DROP CONSTRAINT "FK_21a98334911616294e256a48326"')
    await queryRunner.query('ALTER TABLE "matriz_ies" DROP CONSTRAINT "FK_6bff81dcfd79d17b0119a4f00d1"')
    await queryRunner.query('ALTER TABLE "matriz_ies" DROP CONSTRAINT "FK_8c709b305bc706c8f2c955a621d"')
    await queryRunner.query('ALTER TABLE "matriz_ies" DROP CONSTRAINT "FK_21a0dff90c3ccbceb5d5ce9560a"')
    await queryRunner.query('ALTER TABLE "matriz_ies" DROP CONSTRAINT "FK_37f5db398a48eaa1e81ad8f48a3"')
    await queryRunner.query('ALTER TABLE "matriz_ies" DROP CONSTRAINT "FK_abe97cd61fbfeecaa0fb30f0bec"')
    await queryRunner.query('ALTER TABLE "matriz_ies" DROP CONSTRAINT "FK_660f386908746641e51f983f75d"')
    await queryRunner.query('ALTER TABLE "matriz_obra" DROP CONSTRAINT "FK_1933ace031c5ada4cb55b81353d"')
    await queryRunner.query('ALTER TABLE "matriz_obra" DROP CONSTRAINT "FK_2539b79df941e170d36746821c4"')
    await queryRunner.query('ALTER TABLE "matriz_obra" DROP CONSTRAINT "FK_0e22703338b984321b3df041073"')
    await queryRunner.query('ALTER TABLE "matriz_obra" DROP CONSTRAINT "FK_5028b7ffb26ce767edfa2dee6d8"')
    await queryRunner.query('ALTER TABLE "matriz_obra" DROP CONSTRAINT "FK_f1df0c98a4a1a186a2d0e85b231"')
    await queryRunner.query('ALTER TABLE "matriz_obra" DROP CONSTRAINT "FK_11d8f876229a1dc118ccce979f3"')
    await queryRunner.query('ALTER TABLE "matriz_obra" DROP CONSTRAINT "FK_9b37dcb5395db61224c4e6cb4dc"')
    await queryRunner.query('ALTER TABLE "soportes_obras" DROP CONSTRAINT "FK_5e42915463b40471989b76a1d34"')
    await queryRunner.query('ALTER TABLE "soportes_obras" DROP CONSTRAINT "FK_6fbff81ded510ee3f15d2ea8533"')
    await queryRunner.query('ALTER TABLE "departamento" DROP CONSTRAINT "FK_7f36bdde1f71391c4e03ada694d"')
    await queryRunner.query('ALTER TABLE "telefono" DROP CONSTRAINT "FK_3d5eac338d344c315a4928329f4"')
    await queryRunner.query('ALTER TABLE "subsector" DROP CONSTRAINT "FK_5938a3230836df6605ed4aef1ed"')
    await queryRunner.query('ALTER TABLE "email" DROP CONSTRAINT "FK_2db6bade8788da5fd17069c36ce"')
    await queryRunner.query('DROP INDEX "IDX_9e92c96f814db420b92134ce92" ON "user_entidades_entidad_control"')
    await queryRunner.query('DROP INDEX "IDX_ad084e416f78ef0cab7b4379fe" ON "user_entidades_entidad_control"')
    await queryRunner.query('DROP TABLE "user_entidades_entidad_control"')
    await queryRunner.query('DROP INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role"')
    await queryRunner.query('DROP INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role"')
    await queryRunner.query('DROP TABLE "user_roles_role"')
    await queryRunner.query('DROP TABLE "semestre"')
    await queryRunner.query('DROP TABLE "auth"')
    await queryRunner.query('DROP INDEX "REL_56d00ec31dc3eed1c3f6bff4f5" ON "user"')
    await queryRunner.query('DROP TABLE "user"')
    await queryRunner.query('DROP TABLE "entidad_control"')
    await queryRunner.query('DROP TABLE "municipio"')
    await queryRunner.query('DROP TABLE "matriz_ies"')
    await queryRunner.query('DROP TABLE "document_type"')
    await queryRunner.query('DROP TABLE "estrato"')
    await queryRunner.query('DROP TABLE "matriz_obra"')
    await queryRunner.query('DROP TABLE "soportes_obras"')
    await queryRunner.query('DROP TABLE "tipo_soporte"')
    await queryRunner.query('DROP TABLE "origen_recurso"')
    await queryRunner.query('DROP TABLE "sector_obra"')
    await queryRunner.query('DROP TABLE "estado_obra"')
    await queryRunner.query('DROP TABLE "municipio_type"')
    await queryRunner.query('DROP TABLE "departamento"')
    await queryRunner.query('DROP TABLE "satelital"')
    await queryRunner.query('DROP TABLE "telefono"')
    await queryRunner.query('DROP TABLE "subsector"')
    await queryRunner.query('DROP TABLE "sector"')
    await queryRunner.query('DROP TABLE "email"')
    await queryRunner.query('DROP TABLE "categoria"')
    await queryRunner.query('DROP TABLE "role"')
    await queryRunner.query('DROP TABLE "user_type"')
  }
}
