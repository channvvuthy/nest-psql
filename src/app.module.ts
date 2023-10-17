import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './config/index';
import { UserModule } from './users/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig.psql), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
