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
    const todo = await db.todo.findFirst({
      where: {
        id,
        userId,
      },
      select: {
        done: true,
      },
    });

    if (!todo) throw Error("Todo not Found");
    await db.todo.update({
      where: {
        id,
      },
      data: {
        done: !todo.done,
      },
    });
  }
);
