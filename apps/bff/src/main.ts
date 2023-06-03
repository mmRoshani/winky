import { MicroName } from '@app/common/enum';
import { MicroserviceSetting } from '@app/common/setting';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import { BffModule } from './bff.module';

const logger = new Logger('BFF');

async function bootstrap() {
  const { httpPort, urls } = MicroserviceSetting(MicroName.BFF);

  const app = await NestFactory.create<NestExpressApplication>(BffModule, { cors: true });

  app.useStaticAssets(join(__dirname, 'public'));
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('hbs');

  await app.listen(httpPort);

  logger.log(`Main Microservice has been started on ${urls[0]}`);
  logger.log(`Main Microservice has been started on ${urls[1]}`);
}
void bootstrap();
