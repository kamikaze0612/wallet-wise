import { type Config, ConfigSchema } from './schema';

export const configuration = (overrides?: Partial<Config>) => {
  const config: Config = { ...ConfigSchema.parse(process.env), ...overrides };

  return {
    app: {
      env: config.APP_ENV,
      port: config.APP_PORT,
    },
    auth0: {
      audience: config.AUTH0_AUDIENCE,
      domain: config.AUTH0_DOMAIN,
    },
    db: {
      url: config.DATABASE_URL,
    },
  };
};

export const validate = (env: Record<string, unknown>) => {
  const result = ConfigSchema.safeParse(env);

  if (!result.success) {
    throw new Error(`Invalid environment variables: ${result.error.message}`);
  }

  return result.data;
};
