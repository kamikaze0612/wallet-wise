import { Controller, Get, NotImplementedException } from '@nestjs/common';

import { TransactionsService } from './transactions.service';

@Controller()
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('transactions')
  list() {
    throw new NotImplementedException('NOT_IMPLEMENTED', {
      cause: 'Endpoint not implemented',
      description: 'This endpoint is not implemented yet',
    });
  }
}
