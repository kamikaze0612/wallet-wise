import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { configuration } from '@/config/configuration';
import { SupabaseModule } from '@/modules/supabase/supabase.module';
import { TransactionsModule } from '@/modules/transactions/transactions.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    SupabaseModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
