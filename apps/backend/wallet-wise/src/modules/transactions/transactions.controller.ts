import { Controller } from "@nestjs/common";
import { TsRest, TsRestHandler, tsRestHandler } from "@ts-rest/nest";
import { contract, TransactionsResponseBody } from "api";

import { TransactionsService } from "./transactions.service";

@Controller()
@TsRest({ validateResponses: true })
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @TsRestHandler(contract.transactions.getTransactions)
  async getTransactions() {
    return tsRestHandler(contract.transactions.getTransactions, async () => {
      const data = await this.transactionsService.getTransactions();

      const parsedData = TransactionsResponseBody.parse(data);

      return {
        status: 200,
        body: parsedData,
      };
    });
  }
}
