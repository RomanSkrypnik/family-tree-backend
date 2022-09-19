import { Member } from '../../member/member.entity';
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
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
  }
}
