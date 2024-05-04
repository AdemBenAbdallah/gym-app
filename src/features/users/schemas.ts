import { z } from "zod";

export const InputUpdateUser = z.object({
  name: z.string().optional(),
  username: z.string().optional(),
  bio: z.string().optional(),
});

export type InputUpdateUserType = z.infer<typeof InputUpdateUser>;
