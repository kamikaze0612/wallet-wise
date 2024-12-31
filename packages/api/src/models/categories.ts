import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { categories } from "database";

export const CategoryModel = createSelectSchema(categories);
export type CategoryModel = z.infer<typeof CategoryModel>;
