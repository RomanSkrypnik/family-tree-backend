import { Controller, Get, Res } from '@nestjs/common';
import { BranchService } from './branch.service';
import { Response } from 'express';

@Controller('branches')
export class BranchController {
  constructor(private branchService: BranchService) {}

  @Get()
  async getAll(@Res() res: Response) {
    const branches = await this.branchService.getAll();
    res.json(branches);
  }
}
