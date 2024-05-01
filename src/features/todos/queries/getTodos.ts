import { resolver } from "@blitzjs/rpc";
import { z } from "zod";
import db from "db";

const Input = z.object({
  // userId: z.number(),
});

export default resolver.pipe(
  resolver.zod(Input),
  resolver.authorize(),
  async ({}, { session: { userId } }) => {
    const todos = await db.todo.findMany({ where: { userId } });
    return todos;
  }
);
