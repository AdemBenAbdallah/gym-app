import { resolver } from "@blitzjs/rpc";
import db from "db";
import { InputAddTBlog } from "../schema";

export default resolver.pipe(
  resolver.zod(InputAddTBlog),
  resolver.authorize(),
  async ({ title, content, category, blogImageKey }, { session: { userId } }) => {
    return await db.blog.create({
      data: {
        title,
        content,
        category,
        blogImageKey,
        author: {
          connect: {
            id: userId,
          },
        },
      },
    });
  },
);
