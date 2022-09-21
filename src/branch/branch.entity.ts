import { Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Member } from '../member/member.entity';

@Entity({ name: 'branches' })
export class Branch {
  @PrimaryColumn()
  id: number;

  @OneToMany((type) => Member, (member) => member.branch)
  members: Member[];
}
