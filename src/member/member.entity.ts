import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Children } from '../children/children.entity';
import { Branch } from '../branch/branch.entity';

@Entity({ name: 'members' })
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('date')
  birth: Date;

  @Column()
  branchId: number;

  @OneToOne((type) => Children, (children) => children.parent, {
    onDelete: 'CASCADE',
  })
  children: Children;

  @ManyToOne((type) => Branch, (branch) => branch.members)
  branch: Branch;
}
