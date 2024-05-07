import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    RESEND_API_KAY: z.string().min(1),
    NODEMAILER_LOCAL_USER: z.string().min(1),
    NODEMAILER_LOCAL_PASS: z.string().min(1),
  },

  client: {},

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    RESEND_API_KAY: process.env.RESEND_API_KAY,
    NODEMAILER_LOCAL_USER: process.env.NODEMAILER_LOCAL_USER,
    NODEMAILER_LOCAL_PASS: process.env.NODEMAILER_LOCAL_PASS,
  },
});
