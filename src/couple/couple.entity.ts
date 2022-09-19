import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Member } from '../member/member.entity';

@Entity({ name: 'couples' })
export class Couple {
  @PrimaryColumn()
  id: number;

  @ManyToOne((type) => Member, (member) => member.id)
  user1: Member;

  @ManyToOne((type) => Member, (member) => member.id)
  user2: Member;
}
