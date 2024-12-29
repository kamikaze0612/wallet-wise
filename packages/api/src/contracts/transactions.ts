import { c } from "@/contract";
import { Transaction } from "@/models";

export const transactionsContract = c.router({
  getTransactions: {
    method: "GET",
    path: "/transactions",
    responses: {
      200: Transaction.array(),
    },
  },
});
