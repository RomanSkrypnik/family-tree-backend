import {
  Column,
  Entity,
  JoinColumn, ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Member } from '../member/member.entity';

@Entity({ name: 'children' })
export class Children {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ select: false })
  parentId: number;

  @Column()
  userId: number;

  @ManyToOne((type) => Member, (member) => member.children)
  parent: Member;

  @OneToOne(() => Member)
  @JoinColumn()
  user: Member;
}
