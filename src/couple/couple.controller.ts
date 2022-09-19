import { Controller, Res } from '@nestjs/common';
import { Response } from 'express';
import { CoupleService } from './couple.service';

@Controller('couples')
export class CoupleController {
  constructor(private couples: CoupleService) {}

  async getAll(@Res() res: Response) {
    const couples = await this.couples.getAll();
    res.json(couples);
  }
}
