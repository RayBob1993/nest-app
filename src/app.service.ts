import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Лёха, говна лепёха!';
  }

  getFuck(): string {
    return 'Кирилл, хуй между перил!';
  }
}
