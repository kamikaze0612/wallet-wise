import { z } from "zod";

export const Transaction = z.object({
  amount: z.number().int(),
  category_id: z.string(),
  id: z.string(),
  notes: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});
