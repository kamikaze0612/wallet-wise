import { Inject, Injectable } from '@nestjs/common';
import { transactions } from 'database';
import { eq } from 'drizzle-orm';

import { databaseProviderToken } from '@/common/constants/provider.constants';
import type { Database } from '@/modules/database/database.providers';

@Injectable()
export class TransactionsRepository {
  constructor(@Inject(databaseProviderToken) private readonly db: Database) {}

  async findById(id: number) {
    const transaction = await this.db.query.transactions.findFirst({
      where: eq(transactions.id, id),
    });

    return transaction;
  }
}
