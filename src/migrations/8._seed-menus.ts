import { Menu } from '../entity/Menu/Menu'
import { SubMenu } from '../entity/Menu/SubMenu'
import { Items } from '../entity/Menu/Items'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933641 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Menu, [
      {
        id: 1,
        name: 'Novedades',
        active: true,
        roles: null
      },
      {
        id: 2,
        name: 'Gestion Usuarios',
        active: true,
        roles: ['ADMIN', 'JEDI']
      },
      {
        id: 3,
        name: 'Matrices',
        roles: ['ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS']
      },
      {
        id: 4,
        name: 'Gestion Satelital',
        roles: ['ADMIN', 'JEDI']
      },
      {
        id: 5,
        name: 'Gestion Entidades',
        roles: ['ADMIN', 'JEDI']
      }

    ])

    await queryRunner.manager.insert(SubMenu, [
      {
        id: 1,
        name: 'Usuarios',
        active: true,
        path: '/Usuarios',
        roles: ['ADMIN', 'JEDI'],
        isItem: false,
        isSeparador: false,
        menu: { id: 2 }
      },
      {
        id: 2,
        name: 'Tipo Usuario',
        active: true,
        path: '/tipo-user',
        roles: ['ADMIN', 'JEDI'],
        isItem: false,
        isSeparador: false,
        menu: { id: 2 }
      },
      {
        id: 3,
        name: 'Roles',
        active: true,
        path: '/satelital',
        roles: ['ADMIN', 'JEDI'],
        isItem: false,
        isSeparador: false,
        menu: { id: 2 }
      },

      {
        id: 4,
        name: 'Satelital',
        active: true,
        path: '/roles',
        roles: ['ADMIN', 'JEDI'],
        isItem: false,
        isSeparador: true,
        menu: { id: 4 }
      },
      {
        id: 5,
        name: 'Departamento',
        active: true,
        path: '/department',
        roles: ['ADMIN', 'JEDI'],
        isItem: false,
        isSeparador: false,
        menu: { id: 4 }
      },
      {
        id: 6,
        name: 'Municipios',
        active: true,
        path: '/municipio',
        roles: ['ADMIN', 'JEDI'],
        isItem: false,
        isSeparador: false,
        menu: { id: 4 }
      },
      {
        id: 7,
        name: 'Tipo Municipio',
        active: true,
        path: '/tipo-municipio',
        roles: ['ADMIN', 'JEDI'],
        isItem: false,
        isSeparador: false,
        menu: { id: 4 }
      },
      {
        id: 8,
        name: 'Categoria',
        active: true,
        path: '/categoria',
        roles: ['ADMIN', 'JEDI'],
        isItem: false,
        isSeparador: true,
        menu: { id: 5 }
      },
      {
        id: 9,
        name: 'Sector',
        active: true,
        path: '/sector',
        roles: ['ADMIN', 'JEDI'],
        isItem: false,
        isSeparador: false,
        menu: { id: 5 }
      },
      {
        id: 10,
        name: 'SubSector',
        active: true,
        path: '/subsector',
        roles: ['ADMIN', 'JEDI'],
        isItem: false,
        isSeparador: true,
        menu: { id: 5 }
      },
      {
        id: 11,
        name: 'Entidad',
        active: true,
        path: '/entidad',
        roles: ['ADMIN', 'JEDI'],
        isItem: false,
        isSeparador: false,
        menu: { id: 5 }
      },
      {
        id: 12,
        name: 'Emails',
        active: true,
        path: '/emails',
        roles: ['ADMIN', 'JEDI'],
        isItem: false,
        isSeparador: false,
        menu: { id: 5 }
      },
      {
        id: 13,
        name: 'Rep. Legal',
        active: true,
        path: '/telefonos',
        roles: ['ADMIN', 'JEDI'],
        isItem: false,
        isSeparador: false,
        menu: { id: 5 }
      },
      {
        id: 14,
        name: 'Gestion Matriz Obras',
        active: true,
        roles: ['ADMIN', 'JEDI'],
        isItem: true,
        isSeparador: false,
        menu: { id: 3 }
      },
      {
        id: 15,
        name: 'Gestion Matriz IES',
        active: true,
        roles: ['ADMIN', 'JEDI'],
        isItem: true,
        isSeparador: false,
        menu: { id: 3 }
      }

    ])

    await queryRunner.manager.insert(Items, [
      {
        id: 16,
        name: 'Sector Obra',
        active: true,
        path: '/sector-obra',
        roles: ['ADMIN', 'JEDI'],
        isSeparador: false,
        subitems: false,
        subMenu: { id: 14 }
      },
      {
        id: 17,
        name: 'Origen Recursos',
        active: true,
        path: '/origen-recursos',
        roles: ['ADMIN', 'JEDI'],
        isSeparador: false,
        subitems: false,
        subMenu: { id: 14 }
      },
      {
        id: 18,
        name: 'Estado Obra',
        active: true,
        path: '/estado-obra',
        roles: ['ADMIN', 'JEDI'],
        isSeparador: false,
        subitems: false,
        subMenu: { id: 14 }
      },
      {
        id: 19,
        name: 'Matriz Obra',
        active: true,
        path: '/matriz-obra',
        roles: ['ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'],
        isSeparador: false,
        subitems: false,
        subMenu: { id: 14 }
      },
      {
        id: 20,
        name: 'Matriz IES',
        active: true,
        path: '/matriz-ies',
        roles: ['ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'],
        isSeparador: false,
        subitems: false,
        subMenu: { id: 15 }
      }
    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
