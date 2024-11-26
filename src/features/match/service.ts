import { Db } from "@/db/instance";
import { betsTable } from "./schema";

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
  };
};
