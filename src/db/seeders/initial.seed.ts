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
          name: 'Sidorenko I.I.',
        },
        {
          name: 'Skrypnik V.V.',
        },
        {
          name: 'Skrypnik V.V.',
        },
        {
          name: 'Skrypnik R.V.',
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
