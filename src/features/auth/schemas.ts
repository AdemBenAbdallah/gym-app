import { z } from "zod";
import getCurrentUser from "../users/queries/getCurrentUser";
import { PromiseReturnType } from "blitz";

export const email = z
  .string()
  .email()
  .transform((str) => str.toLowerCase().trim());

export const password = z
  .string()
  .min(10)
  .max(100)
  .transform((str) => str.trim());

export const InputSginUp = z.object({
  email,
  password,
  name: z.string(),
  terms: z.boolean().refine((val) => val === true),
});

export const ForgotPassword = z.object({
  email,
});

export const ResetPassword = z
  .object({
    password: password,
    passwordConfirmation: password,
    token: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
  });

export const ChangePassword = z.object({
  currentPassword: z.string(),
  newPassword: password,
});

export type UserType = PromiseReturnType<typeof getCurrentUser>;
