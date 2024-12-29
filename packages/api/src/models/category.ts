import { z } from "zod";

export const Category = z.object({
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  id: z.string(),
  name: z.string(),
  type: z.enum(["income", "expense", "saving"]),
});
export type Category = z.infer<typeof Category>;
