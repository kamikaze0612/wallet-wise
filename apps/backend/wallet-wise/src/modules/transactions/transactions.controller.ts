import { Controller, Req } from "@nestjs/common";
import { TsRest, TsRestHandler, tsRestHandler } from "@ts-rest/nest";
import { contract } from "api";

import { TransactionsService } from "./transactions.service";

@Controller()
@TsRest({ validateResponses: true })
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @TsRestHandler(contract.transactions.getTransactions)
  async getTransactions(@Req() req: any) {
    return tsRestHandler(contract.transactions.getTransactions, async () => {
      const data = await this.transactionsService.getTransactions();

      console.log(req!.user);

      return {
        status: 200,
        body: data,
      };
    });
  }
}
