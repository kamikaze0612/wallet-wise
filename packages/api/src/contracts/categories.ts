import { z } from "zod";

import { c } from "@/contract";
import {
  CategoriesResponseBody,
  CreateCategoryRequestBody,
} from "@/schemas/dtos";

export const categoriesContract = c.router({
  createCategory: {
    method: "POST",
    path: "/categories",
    body: CreateCategoryRequestBody,
    responses: {
      201: z.object({}),
    },
    summary: "Create a new category",
  },
  getCategories: {
    method: "GET",
    path: "/categories",
    responses: {
      200: CategoriesResponseBody,
    },
    summary: "Get all categories",
  },
});
