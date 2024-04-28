import { resolver } from "@blitzjs/rpc";
import { z } from "zod";

const Input = z.object({
  search: z.string().optional(),
});

export default resolver.pipe(resolver.zod(Input), resolver.authorize(), async ({ search }) => {
  console.log(search);
  const todos = [{ title: "buy beard", id: 1 }, { title: "buy a coffe" }, { title: "buy a tea" }];

  return todos;
});
