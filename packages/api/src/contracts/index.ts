import { c } from "@/contract";

import { transactionsContract } from "./transactions";

export const contract = c.router({
  transactions: transactionsContract,
});
