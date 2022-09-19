import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Couple } from '../couple/couple.entity';
import { Member } from '../member/member.entity';

@Entity({ name: 'children' })
export class Children {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  coupleId: number;

  @Column()
  memberId: number;

  @ManyToOne((type) => Couple, (couple) => couple.children)
  couple: Couple;

  @OneToOne(() => Member)
  @JoinColumn()
  member: Member;
}
