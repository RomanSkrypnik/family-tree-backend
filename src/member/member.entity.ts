import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm';
import { Children } from '../children/children.entity';

@Entity({ name: 'members' })
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('date')
    birth: Date;

    @OneToMany((type) => Children, (children) => children.parent)
    children: Children;
}
