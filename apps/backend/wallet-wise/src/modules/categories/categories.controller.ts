import { Controller } from "@nestjs/common";
import { TsRestHandler, tsRestHandler } from "@ts-rest/nest";
import { contract } from "api";

import { CategoriesService } from "./categories.service";

@Controller()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @TsRestHandler(contract.categories.createCategory)
  createCategory() {
    return tsRestHandler(
      contract.categories.createCategory,
      async ({ body }) => {
        await this.categoriesService.createCategory(body);

        return {
          status: 201,
          body: {},
        };
      },
    );
  }

  @TsRestHandler(contract.categories.getCategories)
  getCategories() {
    return tsRestHandler(contract.categories.getCategories, async () => {
      const categories = await this.categoriesService.getCategories();

      return {
        status: 200,
        body: categories,
      };
    });
  }
}
