import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Children } from './children.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Children])],
})
export default class ChildrenModule {}
