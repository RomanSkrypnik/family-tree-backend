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

    @Column({ select: false })
    parentId: number;

    @Column()
    userId: number;

    @ManyToOne((type) => Member, (member) => member.children, { onDelete: 'CASCADE', orphanedRowAction: 'delete', })
    parent: Member;

    @OneToOne(() => Member, { onDelete: 'CASCADE', orphanedRowAction: 'delete', })
    @JoinColumn()
    user: Member;
}
