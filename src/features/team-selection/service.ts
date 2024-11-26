import { Db } from "@/db/instance";
import { startingLineupTable } from "./schema";
import { PlayerType } from "./types";
import { and, eq } from "drizzle-orm";

export const createService = (db: Db) => {
  return {
    fetchPlayersByPosition: async (position: string) => {
      try {
        const response = await fetch(
          "https://v3.football.api-sports.io/players/squads?team=496",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "afb6474004b1b6c4b4f239bb253e0593",
            },
          },
        );
        if (response.status === 200) {
          const data = await response.json();
          const playersArray = data.response[0].players;
          const players = playersArray.filter(
            (player: { position: string }) => player.position === position,
          );
          return players;
        }
      } catch (error) {
        console.log(error);
      }
    },
    fetchPlayersByTeam: async (): Promise<PlayerType[]> => {
      try {
        const response = await fetch(
          "https://v3.football.api-sports.io/players/squads?team=496",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "afb6474004b1b6c4b4f239bb253e0593",
            },
          },
        );
        if (response.status === 200) {
          const data = await response.json();
          const players = data.response[0].players;
          return players;
        }
      } catch (error) {
        console.log(error);
      }
      return [];
    },
    addStartingLineup: async (rawData: any) => {
      console.log(rawData);
      const lineup = await db
        .insert(startingLineupTable)
        .values(rawData)
        .returning();
      return lineup[0];
    },
    getStartingLineupByIdAndRound: async (
      user_id: number,
      round_id: number,
    ) => {
      const lineup = await db
        .select()
        .from(startingLineupTable)
        .where(
          and(
            eq(startingLineupTable.user_id, user_id),
            eq(startingLineupTable.round_id, round_id),
          ),
        );
      return lineup;
    },
  };
};
