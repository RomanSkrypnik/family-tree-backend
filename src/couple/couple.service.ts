import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Couple } from './couple.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoupleService {

    constructor(@InjectRepository(Couple) private coupleRepository: Repository<Couple>) {}

    async getAll() {
        return await this.coupleRepository.find({ relations: ['children'] });
    }

}
