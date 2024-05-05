import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KAY);

type Props = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

const sendEmail = async ({ from, to, subject, html }: Props) => {
  await resend.emails.send({
    from,
    to,
    subject,
    html,
  });
};
export default sendEmail;
