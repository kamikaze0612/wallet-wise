import { z } from "zod";

import { Category } from "@/models";

export const CategoriesResponseBody = Category.array();
export type CategoriesResponseBody = z.infer<typeof CategoriesResponseBody>;
