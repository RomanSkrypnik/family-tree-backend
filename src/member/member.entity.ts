import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Couple } from '../couple/couple.entity';

@Entity({ name: 'members' })
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Couple)
  couple: Couple;
}
