import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import config from './ormconfig';
import MemberModule from './member/member.module';
import ChildrenModule from './children/children.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(config),
    MemberModule,
    ChildrenModule,
  ],
  controllers: [],
})
export class AppModule {}
