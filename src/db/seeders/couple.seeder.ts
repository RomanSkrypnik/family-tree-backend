import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Couple } from '../../couple/couple.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
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
  }
}
