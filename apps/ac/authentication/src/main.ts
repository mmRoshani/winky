import { MicroName } from '@app/common/enum';
import { MicroserviceSetting } from '@app/common/setting';
import { NestFactory } from '@nestjs/core';
import type { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';

import { AuthenticationModule } from './authentication.module';

const { protoName, protoPath, httpPort, rpcPort, urls } = MicroserviceSetting(MicroName.AUTHENTICATION);

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AuthenticationModule, {
    transport: Transport.GRPC,
    options: {
      protoPath,
      package: protoName,
      loader: { keepCase: true },
    },
  });

  await app.listen();
}
void bootstrap();
