import { z } from "zod";

export const InputUpdateUser = z.object({
  name: z.string().min(3).optional(),
  username: z.string().min(4).optional(),
  bio: z.string().min(8).optional(),
});

export type InputUpdateUserType = z.infer<typeof InputUpdateUser>;
