import { Injectable } from '@nestjs/common';
import { UpsertUserRequestBody } from 'contract';

import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async upsertUser(user: UpsertUserRequestBody) {
    await this.authRepository.upsertUser(user);
  }
}
