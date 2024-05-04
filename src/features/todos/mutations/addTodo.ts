import { resolver } from "@blitzjs/rpc";
import { InputAddTodo } from "../schemas";
import db from "db";

export default resolver.pipe(
  resolver.zod(InputAddTodo),
  resolver.authorize(),
  async ({ todoTitle }, { session: { userId } }) => {
    if (!todoTitle || !userId) return;

    await db.todo.create({
      data: {
        title: todoTitle,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return "todo created";
  }
);
