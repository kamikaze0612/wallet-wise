import { c } from "@/contract";

import { authContract } from "./auth";
import { transactionsContract } from "./transactions";

export const contract = c.router(
  {
    auth: authContract,
    transactions: transactionsContract,
  },
  {
    pathPrefix: "/api/v1",
  }
);
