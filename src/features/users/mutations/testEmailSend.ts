import { resolver } from "@blitzjs/rpc";
import { z } from "zod";
import sendEmail from "~/email/sendEmail";
import { isDev } from "@/config";
import db from "db";

const Input = z.object({
  from: z.string(),
  to: z.string(),
  subject: z.string(),
  html: z.string(),
});

export default resolver.pipe(
  resolver.zod(Input),
  resolver.authorize(),
  async (input, { session: { userId } }) => {
    if (isDev) {
    } else {
      await sendEmail(input);
    }
  }
);
