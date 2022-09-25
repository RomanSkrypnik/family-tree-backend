import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity({ name: 'members' })
@Tree('closure-table')
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('date')
  birth: Date;

  @TreeChildren()
  children: Member[];

  @TreeParent({ onDelete: 'CASCADE' })
  parent: Member;
}
