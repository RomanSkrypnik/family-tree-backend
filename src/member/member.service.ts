import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './member.entity';
import { Repository } from 'typeorm';
import { CreateMemberDto, UpdateMemberDto } from './member.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member) private memberRepository: Repository<Member>,
  ) {}

  async getAll(): Promise<Member[]> {
    return await this.memberRepository.find({ relations: ['children'] });
  }

  async create(dto: CreateMemberDto) {
    return await this.memberRepository.save(dto);
  }

  async delete(id: string) {
    return await this.memberRepository.delete(id);
  }

  async update(dto: UpdateMemberDto) {
    return await this.memberRepository.save(dto);
  }
}
