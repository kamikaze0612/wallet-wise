import { z } from 'zod';

export const ConfigSchema = z.object({
  APP_ENV: z.enum(['development', 'production', 'test']).default('development'),
  APP_PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string(),
  AUTH0_AUDIENCE: z.string(),
  AUTH0_DOMAIN: z.string(),
});
export type Config = z.infer<typeof ConfigSchema>;
