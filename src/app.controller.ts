import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get()
  getHello(): string {
    console.log('GET / route called'); // Dodaj log
    return 'Hello i::team!';
  }
}
