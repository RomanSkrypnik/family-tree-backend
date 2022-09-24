import { Member } from '../../member/member.entity';
import { Children } from '../../children/children.entity';
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {

    await connection
      .createQueryBuilder()
      .insert()
      .into(Member)
      .values([
        {
          id: 1,
          name: 'Sidorenko I.I.',
          birth: new Date(1936, 5, 1),
        },
        {
          id: 2,
          name: 'Skrypnik V.V.',
          birth: new Date(1967, 4, 1),
        },
        {
          id: 3,
          name: 'Skrypnik V.V.',
          birth: new Date(1987, 4, 1),
        },
        {
          id: 4,
          name: 'Skrypnik R.V.',
          birth: new Date(2007, 4, 1),
        },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Children)
      .values([
        {
          parentId: 1,
          userId: 2,
        },
        {
          parentId: 2,
          userId: 3,
        },
        {
          parentId: 3,
          userId: 4,
        },
      ])
      .execute();
  }
}
