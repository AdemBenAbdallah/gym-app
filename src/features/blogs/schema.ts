import { z } from "zod";

export const InputAddTBlog = z.object({
  title: z.string().min(3),
  content: z.string().min(3),
  category: z.string().optional(),
  blogImageKey: z.string().optional(),
});

export type InputAddBlogType = z.infer<typeof InputAddTBlog>;
