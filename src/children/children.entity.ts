import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Member } from '../member/member.entity';

@Entity({ name: 'children' })
export class Children {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parentId: number;

  @Column()
  childrenId: number;

  @OneToOne(() => Member)
  @JoinColumn()
  children: Member;

  @ManyToOne((type) => Member, (member) => member.id)
  parent: Member;
}
