import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from './seiveces/enviroment.service/enviroment.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(EnvService).getPort();

  await app.listen(port);
}
bootstrap();
