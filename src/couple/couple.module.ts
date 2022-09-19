import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Couple } from './couple.entity';
import { CoupleService } from './couple.service';

@Module({
    imports: [TypeOrmModule.forFeature([Couple])],
    providers: [CoupleService],

})
export default class CoupleModule {}
