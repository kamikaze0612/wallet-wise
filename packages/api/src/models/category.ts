import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { categories } from "database";

export const Category = createSelectSchema(categories);
export type Category = z.infer<typeof Category>;
