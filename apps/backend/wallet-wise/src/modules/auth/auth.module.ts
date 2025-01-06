import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { PassportModule } from "@nestjs/passport";

import { JwtAuthGuard } from "@/common/guards/auth.guard";
import { JwtStrategy } from "@/common/strategies/jwt.strategy";

@Module({
  imports: [PassportModule.register({ defaultStrategy: "jwt" })],
  // TODO: Add JwtAuthGuard to all endpoints
  providers: [
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AuthModule {}
