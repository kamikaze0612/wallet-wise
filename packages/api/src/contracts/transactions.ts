import { c } from "@/contract";
import { TransactionsResponseBody } from "@/schemas/dtos";

export const transactionsContract = c.router({
  getTransactions: {
    method: "GET",
    path: "/transactions",
    responses: {
      200: TransactionsResponseBody,
    },
  },
});
