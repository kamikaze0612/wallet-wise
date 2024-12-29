import { z } from "zod";

const commonSchema = z.object({
  APP_ENV: z.enum(["development", "production", "staging"]),
  APP_PORT: z.coerce.number(),
  SUPABASE_URL: z.string(),
  SUPABASE_ANON_KEY: z.string(),
});

export const ENV = commonSchema;
export type ENV = z.infer<typeof ENV>;
