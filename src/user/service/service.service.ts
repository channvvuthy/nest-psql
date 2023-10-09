import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserModel } from '../model/user.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}

  create() {}
}
