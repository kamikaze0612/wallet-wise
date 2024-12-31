import { ConfigModule, ConfigService } from "@nestjs/config";
import { type Schema, schema } from "database";
import { type ExtractTablesWithRelations } from "drizzle-orm";
import { type PgTransaction } from "drizzle-orm/pg-core";
import {
  drizzle,
  type PostgresJsDatabase,
  type PostgresJsQueryResultHKT,
} from "drizzle-orm/postgres-js";
import postgres, { type Sql } from "postgres";

import {
  databaseClientProviderToken,
  databaseProviderToken,
} from "@/common/constants/provider_tokens.constants";

export const databaseProviders = [
  {
    imports: [ConfigModule],
    inject: [ConfigService],
    provide: databaseClientProviderToken,
    useFactory: (configService: ConfigService) => {
      const url = configService.get<string>("database.url")!;
      const client = postgres(url);
      return client;
    },
  },
  {
    inject: [databaseClientProviderToken],
    provide: databaseProviderToken,
    useFactory: async (client: Sql) => {
      // TODO: Enable ssl in production (research why it's necessary)
      const db = drizzle(client, { schema });
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
