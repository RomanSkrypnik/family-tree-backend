import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Children } from '../../children/children.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
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
