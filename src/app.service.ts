import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(id): string {
    return `Hello World! ${id}`;
  }
}
