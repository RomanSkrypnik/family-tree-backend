import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './member.entity';
import { getTreeRepository, Repository } from 'typeorm';
import {
  CreateChildMemberDto,
  CreateMemberDto,
  UpdateMemberDto,
} from './member.dto';

@Injectable()
export class MemberService {
  private memberTreeRepository = getTreeRepository(Member);

  constructor(
    @InjectRepository(Member) private memberRepository: Repository<Member>,
  ) {}

  async get() {
    return await this.memberRepository.find();
  }

  async getTrees() {
    return await this.memberTreeRepository.findTrees();
  }

  async create(dto: CreateMemberDto) {
    return await this.memberRepository.save(dto);
  }

  async createChild(dto: CreateChildMemberDto) {
    const parent = await this.findMember(dto.parentId);
    const child = new Member();
    child.name = dto.name;
    child.birth = new Date(dto.birth);
    child.parent = parent;
    await this.memberTreeRepository.save(child);
    const root = await this.getRoot(child.id);
    return { ...child, root };
  }

  async delete(id: string): Promise<Member[]> {
    const member = await this.findMember(id);
    const ancestors = await this.memberTreeRepository.findAncestors(member);
    await this.memberRepository.delete(id);
    return ancestors;
  }

  async update(dto: UpdateMemberDto) {
    await this.findMember(dto.id);
    return await this.memberRepository.save(dto);
  }

  private async findMember(id: number | string) {
    const member = await this.memberRepository.findOne(id);

    if (!member) {
      throw new HttpException('Member is not found', HttpStatus.NOT_FOUND);
    }

    return member;
  }

  private async getRoot(memberId: number | string) {
    const root = await this.memberTreeRepository.query(
      `SELECT * FROM members_closure WHERE id_descendant=${memberId} AND id_ancestor!=${memberId} LIMIT 1`,
    );
    return root[0]
      ? await this.memberRepository.findOne(root[0]['id_ancestor'])
      : null;
  }
}
