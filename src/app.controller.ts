import { Controller, Get, Req } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
}
