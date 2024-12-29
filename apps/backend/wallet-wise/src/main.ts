import { NestApplicationOptions } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { Logger } from "nestjs-pino";

import { AppModule } from "@/modules/app/app.module";

async function bootstrap() {
  const config: NestApplicationOptions = {
    bufferLogs: true,
  };

  const app = await NestFactory.create(AppModule, config);

  const configService = app.get<ConfigService>(ConfigService);

  // Pino Logger
  const logger = app.get(Logger);
  app.useLogger(logger);

  // CORS
  app.enableCors({
    origin: "http://localhost:3000",
  });

  const port = configService.get<number>("app.port")!;
  await app.listen(port);
}
bootstrap();
