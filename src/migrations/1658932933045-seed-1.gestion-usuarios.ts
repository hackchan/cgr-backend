
import { UserType } from '../entity/UserManagement/UserType'
import { User } from '../entity/UserManagement/User'
import { Auth } from '../entity/UserManagement/Auth'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933045 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(UserType, [
      {
        id: 1,
        name: 'CGR'

      },
      {
        id: 2,
        name: 'TERRITORIAL'

      },
      {
        id: 3,
        name: 'SECTORIZADA'

      },
      {
        id: 4,
        name: 'OTRO'

      }

    ])
    await queryRunner.manager.insert(Auth, [
      {
        id: 1,
        username: 'hackchan',
        password: 'Colombia2020,.*',
        uuid: '618b2be8-2360-11ed-861d-0242ac120002',
        role: ['admin']

      },
      {
        id: 2,
        username: 'montano',
        password: 'montano',
        uuid: '793a8dec-2360-11ed-861d-0242ac120002',
        role: ['info']

      }

    ])
    await queryRunner.manager.insert(User, [
      {
        id: 1,
        name: 'FABIO',
        lastName: 'ROJAS',
        phone: '318389530',
        email: 'fabio.rojas@contraloria.gov.co',
        uuid: '9da70f0c-2360-11ed-861d-0242ac120002',
        tipo: {
          id: 1
        },
        auth: {
          id: 1
        }

      },
      {
        id: 2,
        name: 'HERNANDO',
        lastName: 'MONTANO',
        phone: '3204463154',
        email: 'hernando.montano@contraloria.gov.co',
        uuid: 'a9ddcb3a-2360-11ed-861d-0242ac120002',
        tipo: {
          id: 1
        },
        auth: {
          id: 2
        }

      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
