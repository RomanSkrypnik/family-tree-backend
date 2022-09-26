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
    const { id: rootId } = await this.getRoot(child.id);
    return { ...child, rootId, parent, children: [] };
  }

  async delete(memberId: string) {
    const member = await this.getMember(memberId);
    const root = await this.getRoot(memberId);
    await this.memberRepository.delete(memberId);
    return { id: member.id, rootId: root?.id ?? member.id };
  }

  async update(dto: UpdateMemberDto) {
    await this.getMember(dto.id);
    const body = { ...dto, birth: new Date(dto.birth) };
    const member = await this.memberRepository.save(body);
    const root = await this.getRoot(member.id);
    return { ...member, rootId: root?.id ?? member.id };
  }

  private async getMember(id: number | string) {
    const member = await this.memberRepository.findOne(id);

    if (!member) {
      throw new HttpException('Member is not found', HttpStatus.NOT_FOUND);
    }

    return member;
  }

  private async getRoot(memberId: number | string): Promise<Member | null> {
    const root = await this.memberTreeRepository.query(
      `SELECT id_ancestor FROM members_closure WHERE id_descendant=${memberId} AND id_ancestor!=${memberId} LIMIT 1`,
    );
    return root[0]
      ? await this.memberRepository.findOne(root[0]['id_ancestor'])
      : null;
  }
}
