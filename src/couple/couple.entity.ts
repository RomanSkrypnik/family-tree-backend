import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Member } from '../member/member.entity';
import { Children } from '../children/children.entity';

@Entity({ name: 'couples' })
export class Couple {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user1Id: number;

  @Column()
  user2Id: number;

  @OneToOne(() => Member)
  @JoinColumn()
  user1: Member;

  @OneToOne(() => Member)
  @JoinColumn()
  user2: Member;

  @OneToMany(() => Children, (children) => children.couple)
  children: Children[];
}
