// import { render } from "@react-email/render";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KAY);

const sendEmail = async ({ to, subject, react }) => {
  const message = { from: "onboarding@resend.dev", to, subject };

  // if (isDev) {
  //   const html = render(react);
  //   return nodmailerLocalAppTransport.sendMail({ ...message, html: html });
  // }

  await resend.emails.send({
    ...message,
    react,
  });
};
export default sendEmail;
