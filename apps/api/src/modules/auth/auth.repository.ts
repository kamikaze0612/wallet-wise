import { Inject, Injectable } from '@nestjs/common';
import { UpsertUserRequestBody } from 'contract';
import { users } from 'database';

import { databaseProviderToken } from '@/common/constants/provider.constants';
import type { Database } from '@/modules/database/database.providers';

@Injectable()
export class AuthRepository {
  constructor(@Inject(databaseProviderToken) private readonly db: Database) {}

  async upsertUser(user: UpsertUserRequestBody) {
    await this.db
      .insert(users)
      .values({
        id: user.id,
        email: user.email,
        fullname: user.fullname,
      })
      .onConflictDoUpdate({
        target: users.id,
        set: {
          fullname: user.fullname,
          email: user.email,
        },
      });
  }
}
