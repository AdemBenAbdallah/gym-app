import { authenticateUser } from "@/utils/auth-utils";
import { resolver } from "@blitzjs/rpc";
import { Role } from "types";
import { InputLogin } from "../schemas";

export default resolver.pipe(resolver.zod(InputLogin), async ({ email, password }, ctx) => {
  const user = await authenticateUser(email, password);
  await ctx.session.$create({ userId: user.id, role: user.role as Role });

  return user;
});
