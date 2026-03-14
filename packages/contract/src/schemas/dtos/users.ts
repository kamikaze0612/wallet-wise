import { z } from 'zod';

import { UserModel } from '@/models';

export const UpsertUserRequestBody = UserModel.pick({
  id: true,
  fullname: true,
  email: true,
});
export type UpsertUserRequestBody = z.infer<typeof UpsertUserRequestBody>;
