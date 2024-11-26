import { boolean, integer, pgTable } from "drizzle-orm/pg-core";
import { usersTable } from "../team-selection/schema";

export const betsTable = pgTable("bets", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user_id: integer()
    .notNull()
    .references(() => usersTable.id),
  round_id: integer().notNull(),
  amount: integer().notNull(),
  accepted_by_user_id: integer().references(() => usersTable.id),
  is_accepted: boolean().default(false).notNull(),
});
