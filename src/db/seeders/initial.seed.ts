import { Member } from '../../member/member.entity';
import { Couple } from '../../couple/couple.entity';
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
          name: 'Sidorenko A.V.',
        },
        {
          name: 'Skrypnik M.V.',
        },
        {
          name: 'Skrypnik V.V.',
        },
        {
          name: 'Skrypnik V.I.',
        },
        {
          name: 'Skrypnik V.V.',
        },
        {
          name: 'Skrypnik I.V.',
        },
        {
          name: 'Skrypnik R.V.',
        },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Couple)
      .values([
        {
          user1Id: 1,
          user2Id: 2,
        },
        {
          user1Id: 3,
          user2Id: 4,
        },
        {
          user1Id: 5,
          user2Id: 6,
        },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Children)
      .values([
        {
          coupleId: 1,
          memberId: 5,
        },
        {
          coupleId: 2,
          memberId: 6,
        },
        {
          coupleId: 3,
          memberId: 7,
        },
        {
          coupleId: 3,
          memberId: 8,
        },
      ])
      .execute();
  }
}
