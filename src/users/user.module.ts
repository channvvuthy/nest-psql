import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserAttribute } from './user-attribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserAttribute])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
