import { z } from "zod";

import { TransactionModel } from "@/models";

export const TransactionsResponseBody = TransactionModel.array();
export type TransactionsResponseBody = z.infer<typeof TransactionsResponseBody>;
