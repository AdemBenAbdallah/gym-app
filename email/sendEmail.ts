import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KAY);

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "adem123azertyuiop@gmail.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});
