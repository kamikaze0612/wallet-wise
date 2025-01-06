import { Inject, Injectable } from "@nestjs/common";
import { CreateCategoryRequestBody } from "api";
import { categories } from "database";

import { databaseProviderToken } from "@/common/constants/provider_tokens.constants";
import type { Database } from "@/modules/database/database.provider";

@Injectable()
export class CategoriesService {
  constructor(@Inject(databaseProviderToken) private readonly db: Database) {}

  async createCategory(data: CreateCategoryRequestBody) {
    await this.db.insert(categories).values(data);
  }

  async getCategories() {
    return await this.db.query.categories.findMany();
  }
}
