import {
    integer,
    pgTable,
    varchar,
  } from "drizzle-orm/pg-core";
  
  export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    username: varchar().notNull(),
  });

  export const playersTable = pgTable("players", {
    id: integer().primaryKey().notNull(),
    points: integer().default(0),
  });

  export const startingLineupTable = pgTable("starting_lineup", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    user_id: integer().notNull().references(() => usersTable.id),
    round_id: integer().notNull(),
    player_id: integer().notNull(),
    position: varchar().notNull(),
  });

  export const userLineupTable = pgTable("user_lineup", {
    user_id: integer().notNull().references(() => usersTable.id),
    lineup_id: integer().notNull().references(() => startingLineupTable.id),
  });

