import { Inject, Injectable } from "@nestjs/common";

import { databaseProviderToken } from "@/common/constants/provider_tokens.constants";
import type { Database } from "@/modules/database/database.provider";

@Injectable()
export class CategoriesService {
  constructor(@Inject(databaseProviderToken) private readonly db: Database) {}

  async getCategories() {
    return await this.db.query.categories.findMany();
  }
}
