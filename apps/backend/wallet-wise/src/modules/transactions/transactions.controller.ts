import { Controller, UseGuards } from "@nestjs/common";
import { TsRest, TsRestHandler, tsRestHandler } from "@ts-rest/nest";
import { contract, TransactionsResponseBody } from "api";

import { JwtAuthGuard } from "@/common/guards/auth.guard";

import { TransactionsService } from "./transactions.service";

@Controller()
@TsRest({ validateResponses: true })
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @TsRestHandler(contract.transactions.getTransactions)
  @UseGuards(JwtAuthGuard)
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
