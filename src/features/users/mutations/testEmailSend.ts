import { resolver } from "@blitzjs/rpc";
import { z } from "zod";
import db from "db";
import sendEmail from "~/email/sendEmail";
import React from "react";
import EmailTemplateWelcome from "~/email/react-email/emails/welcome";

const Input = z.object({});

export default resolver.pipe(
  resolver.zod(Input),
  resolver.authorize(),
  async ({}, { session: { userId } }) => {
    await sendEmail({
      to: "adem123azertyuiop@gmail.com",
      subject: "Welcome to hajem",
      react: React.createElement(EmailTemplateWelcome, {
        props: { name: "adem" },
      }),
    }).catch((err) => console.log(err));
  }
);
