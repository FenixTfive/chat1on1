import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Logger } from '@nestjs/common';

@Module({
  controllers: [UsersController],
  providers: [UsersService, Logger],
})
export class UsersModule { }
