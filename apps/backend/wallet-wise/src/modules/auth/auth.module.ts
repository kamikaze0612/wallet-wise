import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";

import { JwtStrategy } from "@/common/strategies/jwt.strategy";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [PassportModule.register({ defaultStrategy: "jwt" })],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
