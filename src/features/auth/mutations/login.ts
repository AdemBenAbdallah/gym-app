import { resolver } from "@blitzjs/rpc";
import { Role } from "types";
import { authenticateUser } from "@/utils/auth-utils";
import { email } from "../schemas";
import { z } from "zod";

export const InputLogin = z.object({
  email,
  password: z.string(),
});

export default resolver.pipe(resolver.zod(InputLogin), async ({ email, password }, ctx) => {
  const user = await authenticateUser(email, password);
  await ctx.session.$create({ userId: user.id, role: user.role as Role });

  return user;
});
