import { ENV } from "./schema";

export const configuration = () => {
  const env: ENV = ENV.parse(process.env);

  return {
    app: {
      port: env.APP_PORT,
      environment: env.APP_ENV,
    },
    auth0: {
      issuer: env.AUTH0_ISSUER_URL,
      audience: env.AUTH0_AUDIENCE,
    },
    jwt: {
      secret: env.JWT_SECRET,
    },
    database: {
      url: env.DATABASE_URL,
    },
  };
};
