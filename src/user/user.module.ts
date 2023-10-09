import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { ServiceService } from './service/service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './model/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [ControllerController],
  providers: [ServiceService],
})
export class UserModule {}
