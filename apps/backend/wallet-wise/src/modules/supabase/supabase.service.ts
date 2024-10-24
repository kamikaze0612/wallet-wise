import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from 'database';

@Injectable()
export class SupabaseService extends SupabaseClient<Database> {
  constructor(configService: ConfigService) {
    super(
      configService.get<string>('supabase.url'),
      configService.get<string>('supabase.anonKey'),
    );
  }
}
