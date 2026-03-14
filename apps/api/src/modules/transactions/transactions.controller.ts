import { Controller, Get, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '@/common/guards/jwt_auth.guard';

import { TransactionsService } from './transactions.service';

@Controller()
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('transactions')
  listTransactions() {
    return {
      status: 'success',
      data: [],
    };
  }
}
