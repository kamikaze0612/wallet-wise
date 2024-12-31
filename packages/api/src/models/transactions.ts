import { transactions } from "database";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const TransactionModel = createSelectSchema(transactions);
export type TransactionModel = z.infer<typeof TransactionModel>;
