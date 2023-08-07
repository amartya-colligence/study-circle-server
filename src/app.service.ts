import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

  getAppName(): string {
    return 'Welcome to Study Circlse!';
  }
}
