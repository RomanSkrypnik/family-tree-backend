import { Controller, Get, Res } from '@nestjs/common';
import { MemberService } from './member.service';
import { Response } from 'express';

@Controller('members')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Get()
  async getAll(@Res() res: Response) {
    const members = await this.memberService.getAll();
    res.json(members);
  }
}
