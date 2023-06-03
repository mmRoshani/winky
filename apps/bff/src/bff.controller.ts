import { Controller, Get, Render } from '@nestjs/common';

import { BffService } from './bff.service';

@Controller()
export class BffController {
  constructor(private readonly bffService: BffService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
