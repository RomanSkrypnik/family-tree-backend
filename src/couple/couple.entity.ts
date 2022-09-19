import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Member } from '../member/member.entity';

@Entity({ name: 'couples' })
export class Couple {
  @PrimaryColumn()
  id: number;

  @Column()
  user1Id: number;

  @Column()
  user2Id: number;

  @OneToOne((type) => Member, (member) => member.id)
  @JoinColumn()
  user1: Member;

  @OneToOne((type) => Member, (member) => member.id)
  @JoinColumn()
  user2: Member;
}
