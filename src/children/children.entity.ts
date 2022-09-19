import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Couple } from '../couple/couple.entity';
import { Member } from '../member/member.entity';

@Entity({ name: 'children' })
export class Children {
  @PrimaryColumn()
  id: number;

  @Column()
  coupleId: number;

  @Column()
  memberId: number;

  @ManyToOne((type) => Couple, (couple) => couple.id)
  couple: Couple;

  @OneToOne(() => Member)
  @JoinColumn()
  member: Member;
}
