import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { JwtAuthGuard } from '@/common/guards/jwt_auth.guard';
import { JwtStrategy } from '@/common/strategies/jwt.strategy';

import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, JwtAuthGuard, JwtStrategy],
})
export class AuthModule {}
