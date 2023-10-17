import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './config/index';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig.psql)],
  controllers: [],
  providers: [],
})
export class AppModule {}
