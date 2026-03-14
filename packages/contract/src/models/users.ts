import { users } from 'database';
import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const UserModel = createSelectSchema(users);
export type UserModel = z.infer<typeof UserModel>;
