import { ENV } from "./schema";

export const configuration = () => {
  const env: ENV = ENV.parse(process.env);

  return {
    app: {
      port: env.APP_PORT,
      environment: env.APP_ENV,
    },
    jwt: {
      secret: env.JWT_SECRET,
    },
    supabase: {
      url: env.SUPABASE_URL,
      anonKey: env.SUPABASE_ANON_KEY,
    },
  };
};
