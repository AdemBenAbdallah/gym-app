import { resolver } from "@blitzjs/rpc";
import db from "~/db";
import { InputSubscription } from "../schemas";

export default resolver.pipe(
  resolver.zod(InputSubscription),
  resolver.authorize(),
  async ({ userId, startDate, endDate, subscriptionCost }) => {
    if (!startDate || !endDate) return;

    await db.subscription.create({
      data: {
        startDate,
        endDate,
        subscriptionCost,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return "subscription created";
  },
);
