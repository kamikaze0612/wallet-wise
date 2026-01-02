import { Injectable } from '@nestjs/common';

import { TransactionsRepository } from './transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async findById(id: number) {
    return await this.transactionsRepository.findById(id);
  }
}
