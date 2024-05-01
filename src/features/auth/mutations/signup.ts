import { SecurePassword } from "@blitzjs/auth/secure-password";
import { resolver } from "@blitzjs/rpc";
import db from "db";
import { Role } from "types";
import { z } from "zod";
import { email, password } from "../schemas";

export const Input = z.object({
  name: z.string(),
  email,
  password,
});

export default resolver.pipe(resolver.zod(Input), async ({ name, email, password }, ctx) => {
  const hashedPassword = await SecurePassword.hash(password.trim());
  const user = await db.user.create({
    data: { name, email: email.toLowerCase().trim(), hashedPassword, role: "USER" },
    select: { id: true, name: true, email: true, role: true },
  });

  await ctx.session.$create({ userId: user.id, role: user.role as Role });
  return user;
});
