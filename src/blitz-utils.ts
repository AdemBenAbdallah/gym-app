import { generateToken, hash256 } from "@blitzjs/auth";
import { addDays } from "date-fns";
import { TokenType } from "@prisma/client";
import { URL_ORIGIN } from "@/config";
import db from "~/db";
const EMAIL_VERIFY_LINK_IN_HOUR = 4;

const creatToken = async ({ userId, userEmail, tokenType }) => {
  const token = generateToken();
  const hashedToken = hash256(token);
  const expiresAt = addDays(new Date(), EMAIL_VERIFY_LINK_IN_HOUR);

  await db.token.create({
    data: {
      user: { connect: { id: userId } },
      type: tokenType,
      expiresAt,
      hashedToken,
      sentTo: userEmail,
    },
  });

  return token;
};

export const regenrateToken = async ({
  userId,
  userEmail,
  tokenType,
}: {
  userId: string;
  userEmail: string;
  tokenType: TokenType;
}): Promise<string> => {
  await db.token.deleteMany({ where: { type: tokenType, userId } });

  const token = await creatToken({
    userId,
    userEmail,
    tokenType,
  });

  return token;
};

export const getEmailVerifyLink = async ({
  userId,
  userEmail,
}: {
  userId: string;
  userEmail: string;
}): Promise<string> => {
  const token = await regenrateToken({
    userId,
    userEmail,
    tokenType: TokenType.VERIFY_EMAIL,
  });
  const link = `${URL_ORIGIN}/auth/verify-email?token=${token}`;
  return link;
};
