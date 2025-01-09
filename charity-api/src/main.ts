import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api', 
  //   { exclude: ['/shop', '/admin-dashboard', '/volunteer-dashboard'], });
  // app.enableCors({
  //   origin: ['http://127.0.0.1:8080', 'http://another-allowed-origin.com'],
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   allowedHeaders: 'Content-Type, Authorization',
  //   credentials: true,
  // });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
