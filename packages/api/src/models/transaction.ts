import { transactions } from "database";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const Transaction = createSelectSchema(transactions);
export type Transaction = z.infer<typeof Transaction>;
