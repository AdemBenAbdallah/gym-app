import { resolver } from "@blitzjs/rpc";
import { z } from "zod";

const Input = z.object({
  todoTitle: z.string().optional(),
});

export default resolver.pipe(resolver.zod(Input), resolver.authorize(), async (params) => {
  const { todoTitle } = params;
  console.log("todoTitle", todoTitle);

  return "todo created";
});
