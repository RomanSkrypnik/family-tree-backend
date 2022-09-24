import { Member } from '../../member/member.entity';
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const memberTreeRepository = connection.getTreeRepository(Member);

    const grandparent = new Member();
    grandparent.name = 'Sidorenko I.I.';
    grandparent.birth = new Date(1936, 4, 1);
    await memberTreeRepository.save(grandparent);

    const parent = new Member();
    parent.name = 'Skrypnik V.V.';
    parent.birth = new Date(1967, 1, 1);
    parent.parent = grandparent;
    await memberTreeRepository.save(parent);

    const child = new Member();
    child.name = 'Skrypnik V.A.';
    child.birth = new Date(1987, 2, 2);
    child.parent = parent;
    await memberTreeRepository.save(child);

    const grandchild = new Member();
    grandchild.name = 'Skrypnik V.S.';
    grandchild.birth = new Date(2007, 1, 1);
    grandchild.parent = child;
    await memberTreeRepository.save(grandchild);
  }
}
