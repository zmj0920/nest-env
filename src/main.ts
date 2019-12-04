import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { join } from 'path';
import * as serveStatic from 'serve-static';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: [ 'http://localhost:8080', 'http://127.0.0.1:8081', 'http://127.0.0.1:8082'],
    credentials: true,
  }));
  app.use('/public', serveStatic(join(__dirname, '../public'), {
    maxAge: '1d',
    extensions: ['jpg', 'jpeg', 'png', 'gif'],
   }));
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
