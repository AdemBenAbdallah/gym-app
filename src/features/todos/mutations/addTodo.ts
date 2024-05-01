import { resolver } from "@blitzjs/rpc";
import { z } from "zod";
import db from "db";

const Input = z.object({
  todoTitle: z.string().optional(),
});

export default resolver.pipe(
  resolver.zod(Input),
  resolver.authorize(),
  async ({ todoTitle }, { session: { userId } }) => {
    if (!todoTitle || !userId) return;

    await db.todo.create({
      data: {
        userId,
        title: todoTitle,
      },
    });
    return "todo created";
  }
);
