import { Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/users')
  async upsertUser() {
    return {
      message:
        'This is a placeholder for the upsertUser endpoint. Implement the logic in AuthService.',
    };
  }
}
