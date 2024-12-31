import { c } from "@/contract";

import { categoriesContract } from "./categories";
import { transactionsContract } from "./transactions";

export const contract = c.router(
  {
    categories: categoriesContract,
    transactions: transactionsContract,
  },
  {
    pathPrefix: "/api/v1",
  }
);
