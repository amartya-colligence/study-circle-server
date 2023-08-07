import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/study-circle")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/appname")
  getAppName(): string {
    return this.appService.getAppName();
  }
}
