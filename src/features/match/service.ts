import { Db } from "@/db/instance";
import { betsTable } from "./schema";
import { eq } from "drizzle-orm";

export const createService = (db: Db) => {
  return {
    createBet: async (user_id: number, round_id: number, amount: number) => {
      const newBet = {
        user_id,
        round_id,
        amount,
      };

      const bet = await db.insert(betsTable).values(newBet).returning();

      return bet[0];
    },
    getAllBets: async () => {
      const bets = await db.select().from(betsTable);
      return bets;
    },
    acceptBetById: async (bet_id: number, user_id: number) => {
      await db
        .update(betsTable)
        .set({ is_accepted: true, accepted_by_user_id: user_id })
        .where(eq(betsTable.id, bet_id));
    },
    getBetById: async (bet_id: number) => {
      const bet = await db
        .select()
        .from(betsTable)
        .where(eq(betsTable.id, bet_id));
      return bet[0];
    },
  };
};
