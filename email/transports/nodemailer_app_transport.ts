import * as nodemailer from "nodemailer";

const user = process.env.NODEMAILER_LOCAL_USER;
const pass = process.env.NODEMAILER_LOCAL_PASS;

export const nodmailerLocalAppTransport = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  auth: {
    user: user,
    pass: pass,
  },
});
