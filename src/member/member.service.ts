import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemberService {
    constructor(
        @InjectRepository(Member) private memberRepository: Repository<Member>,
    ) {}

    async getAll(): Promise<Member[]> {
        return this.memberRepository.find();
    }
}
