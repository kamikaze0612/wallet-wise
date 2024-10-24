import { c } from "@/contract";
import { Transaction } from "@/models/transactions";

export const transactionsContract = c.router({
  getTransactions: {
    method: "GET",
    path: "/transactions",
    responses: {
      200: Transaction.array(),
    },
  },
});
