import { c } from "@/contract";
import { CategoriesResponseBody } from "@/schemas/dtos";

export const categoriesContract = c.router({
  getCategories: {
    method: "GET",
    path: "/categories",
    responses: {
      200: CategoriesResponseBody,
    },
    summary: "Get all categories",
  },
});
