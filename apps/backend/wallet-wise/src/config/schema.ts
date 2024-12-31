import { z } from "zod";

const commonSchema = z.object({
  APP_ENV: z.enum(["development", "production", "staging"]),
  APP_PORT: z.coerce.number(),
  JWT_SECRET: z.string(),
  AUTH0_ISSUER_URL: z.string(),
  AUTH0_AUDIENCE: z.string(),
  DATABASE_URL: z.string(),
});

export const ENV = commonSchema;
export type ENV = z.infer<typeof ENV>;
