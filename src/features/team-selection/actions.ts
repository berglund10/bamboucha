"use server";

type LineupSlot = {
    position: string;
    player: Player | null;
  };
  
  type Player = {
    id: number;
    name: string;
    age: number;
    number: number;
    position: string;
    photo: string;
  };

import { redirect } from "next/navigation";
import { teamSelectionService } from "./instance";

export const SaveStartingElevenAction = async (user_id: number, lineup: LineupSlot[]) => {
    
    const startingElevenData = lineup.map((slot) => {
        return {
            user_id: user_id,
            position: slot.position,
            player_id: slot.player?.id,
            round_id: 1
        };
    });
    
    await teamSelectionService.addStartingLineup(startingElevenData);

  redirect("/match");
};
