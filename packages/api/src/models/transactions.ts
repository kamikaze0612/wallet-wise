import { z } from "zod";

export const Transaction = z.object({
  amount: z.number().int(),
  category_id: z.string(),
  id: z.string(),
  notes: z.string().nullable(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});
