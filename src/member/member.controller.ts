import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Res,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { Response } from 'express';
import { CreateChildMemberDto, CreateMemberDto, UpdateMemberDto } from './member.dto';

@Controller('members')
export class MemberController {
    constructor(private memberService: MemberService) {
    }

    @Get()
    async getAll(@Res() res: Response) {
        const members = await this.memberService.getAll();
        res.json(members);
    }

    @Post()
    async create(@Body() body: CreateMemberDto, @Res() res: Response) {
        const member = await this.memberService.create(body);
        res.json(member);
    }

    @Post('create-child')
    async createChild(@Body() body: CreateChildMemberDto, @Res() res: Response) {
      const member = await this.memberService.createChild(body);
      res.json(member);
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response) {
        await this.memberService.delete(id);
        res.json(id);
    }

    @Patch()
    async update(@Body() body: UpdateMemberDto, @Res() res: Response) {
        const member = await this.memberService.update(body);
        res.json(member);
    }
}
