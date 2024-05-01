import { resolver } from "@blitzjs/rpc";
import { z } from "zod";
import db from "db";

const Input = z.object({
  // search: z.string().optional(),
});

export default resolver.pipe(resolver.zod(Input), resolver.authorize(), async () => {
  // const todos = [{ title: "buy beard", id: 1 }, { title: "buy a coffe" }, { title: "buy a tea" }];
  const todos = await db.todo.findMany();
  return todos;
});
