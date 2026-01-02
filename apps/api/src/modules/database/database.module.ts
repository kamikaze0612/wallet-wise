import { Global, Inject, Module, OnModuleDestroy } from '@nestjs/common';
import type { Sql } from 'postgres';

import { databaseClientProviderToken } from '@/common/constants/provider.constants';

import { databaseProviders } from './database.providers';

@Global()
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule implements OnModuleDestroy {
  constructor(
    @Inject(databaseClientProviderToken) private readonly client: Sql,
  ) {}

  async onModuleDestroy() {
    await this.client.end();
  }
}
