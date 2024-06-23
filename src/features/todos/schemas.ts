import { z } from "zod";

export const InputAddTodo = z.object({
  todoTitle: z.string().min(3),
});
