import { Controller, Post } from '@nestjs/common';

@Controller('users')
export class ControllerController {
  @Post()
  create() {}
}
