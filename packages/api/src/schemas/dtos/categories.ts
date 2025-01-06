import { z } from "zod";

import { CategoryModel } from "@/models";

export const CreateCategoryRequestBody = CategoryModel.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type CreateCategoryRequestBody = z.infer<
  typeof CreateCategoryRequestBody
>;

export const CategoriesResponseBody = CategoryModel.array();
export type CategoriesResponseBody = z.infer<typeof CategoriesResponseBody>;
