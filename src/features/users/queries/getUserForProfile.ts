import { resolver } from "@blitzjs/rpc";
import { z } from "zod";
import db from "db";
import { NotFoundError } from "blitz";

const Input = z.object({
  username: z.string().optional(),
});

export default resolver.pipe(
  resolver.zod(Input),
  resolver.authorize(),
  async ({ username }, { session: {} }) => {
    if (!username) throw new Error("You should have a username");

    const user = await db.user.findUnique({ where: { username } });

    if (!user) throw new NotFoundError();
    return user;
  }
);
