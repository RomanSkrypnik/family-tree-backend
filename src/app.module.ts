import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import config from './ormconfig';
import MemberModule from './member/member.module';
import CoupleModule from './couple/couple.module';
import ChildrenModule from './children/children.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(config)],
  controllers: [],
  providers: [MemberModule, CoupleModule, ChildrenModule],
})
export class AppModule {}
