import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.use(express.static('.'))
  app.setGlobalPrefix('api')

  const config = new DocumentBuilder().setTitle("Swagger").addBearerAuth().setVersion("1.0").build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/swagger", app, document);

  await app.listen(8080);
}
bootstrap();
