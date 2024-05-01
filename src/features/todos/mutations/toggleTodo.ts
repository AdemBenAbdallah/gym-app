import { resolver } from "@blitzjs/rpc";
import { date, z } from "zod";
import db from "db";

const Input = z.object({
  id: z.string(),
});

export default resolver.pipe(
  resolver.zod(Input),
  resolver.authorize(),
  async ({ id }, { session: { userId } }) => {
    await db.todo.update({ where: { id }, data: { done: true } });
    return "todo created";
  }
);
