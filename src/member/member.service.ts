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
    const birth = new Date(dto.birth);
    const member = await this.memberRepository.save({ ...dto, birth });
    return { ...member, children: [] };
  }

  async createChild({ parentId, birth, name }: CreateChildMemberDto) {
    const parent = await this.getMember(parentId);
    const body = { children: [], parent, birth: new Date(birth), name };
    const child = await this.memberTreeRepository.save(body);
    const rootId = await this.getRootId(child.id);
    return { ...child, rootId, parent, children: [] };
  }

  async delete(memberId: string) {
    const member = await this.getMember(memberId);
    const rootId = await this.getRootId(memberId);
    await this.memberRepository.delete(memberId);
    return { id: member.id, rootId: rootId ?? member.id };
  }

  async update(dto: UpdateMemberDto) {
    await this.getMember(dto.id);
    const body = { ...dto, birth: new Date(dto.birth) };
    const member = await this.memberRepository.save(body);
    const rootId = await this.getRootId(member.id);
    return { ...member, rootId: rootId ?? member.id };
  }

  private async getMember(id: number | string) {
    const member = await this.memberRepository.findOne(id);

    if (!member) {
      throw new HttpException('Member is not found', HttpStatus.NOT_FOUND);
    }

    return member;
  }

  private async getRootId(memberId: number | string): Promise<number | null> {
    const query = `SELECT members.* FROM members_closure INNER JOIN members ON members_closure.id_ancestor=members.id WHERE id_descendant=${memberId} AND id_ancestor!=${memberId} LIMIT 1`;
    const root = await this.memberTreeRepository.query(query);
    return root[0] ? root[0].id : null;
  }
}
