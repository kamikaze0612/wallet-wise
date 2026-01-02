import { z } from 'zod';

export const ConfigSchema = z.object({
  APP_ENV: z.enum(['development', 'production', 'test']).default('development'),
  APP_PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string(),
});
export type Config = z.infer<typeof ConfigSchema>;
