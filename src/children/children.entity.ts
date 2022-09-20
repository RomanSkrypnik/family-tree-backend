import {
  Column,
  Entity,
  JoinColumn,
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

  @OneToOne((type) => Member)
  @JoinColumn()
  parent: Member;

  @OneToOne(() => Member)
  @JoinColumn()
  user: Member;
}
