import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import config from './ormconfig';
import MemberModule from './member/member.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(config)],
  controllers: [],
  providers: [MemberModule],
})
export class AppModule {}
