import { z } from "zod";

import { Transaction } from "@/models";

export const TransactionsResponseBody = Transaction.array();
export type TransactionsResponseBody = z.infer<typeof TransactionsResponseBody>;
