import { Injectable, InternalServerErrorException } from "@nestjs/common";

import { SupabaseService } from "@/modules/supabase/supabase.service";

@Injectable()
export class TransactionsService {
  constructor(private readonly supabase: SupabaseService) {}

  async getTransactions() {
    const { data, error } = await this.supabase
      .from("transactions")
      .select("*");

    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    return data;
  }
}
