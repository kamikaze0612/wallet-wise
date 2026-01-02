import { ConfigModule, ConfigService } from '@nestjs/config';
import { Schema, schemas } from 'database';
import type { ExtractTablesWithRelations } from 'drizzle-orm';
import {
  type PostgresJsDatabase,
  type PostgresJsQueryResultHKT,
  drizzle,
} from 'drizzle-orm/postgres-js';
import type { PgTransaction } from 'drizzle-orm/pg-core';
import postgres, { type Sql } from 'postgres';

import {
  databaseClientProviderToken,
  databaseProviderToken,
} from '@/common/constants/provider.constants';

export const databaseProviders = [
  {
    import: [ConfigModule],
    inject: [ConfigService],
    provide: databaseClientProviderToken,
    useFactory: (configService: ConfigService) => {
      const url = configService.get<string>('db.url')!;

      // Disable prefetch as it is not supported for "Transaction" pool mode
      const client = postgres(url, {
        prepare: false,
      });

      return client;
    },
  },
  {
    inject: [databaseClientProviderToken],
    provide: databaseProviderToken,
    useFactory: (client: Sql) => {
      const db = drizzle(client, { schema: schemas });

      return db;
    },
  },
];

export type Database = PostgresJsDatabase<Schema>;
export type Transaction = PgTransaction<
  PostgresJsQueryResultHKT,
  Schema,
  ExtractTablesWithRelations<Schema>
>;
