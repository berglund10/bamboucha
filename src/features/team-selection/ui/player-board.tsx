"use client";

import { useState } from "react";
import { OptionList } from "./option-list";
import { FootballPitch } from "./football-pitch";
import { SaveStartingElevenAction } from "../actions";

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

type Props = {
  players: Player[];
};

export function PlayerBoard({ players }: Props) {
  const [lineupSlots, setLineupSlots] = useState<LineupSlot[]>([
    { position: "Goalkeeper", player: null },
    { position: "Defender1", player: null },
    { position: "Defender2", player: null },
    { position: "Defender3", player: null },
    { position: "Defender4", player: null },
    { position: "Midfielder1", player: null },
    { position: "Midfielder2", player: null },
    { position: "Midfielder3", player: null },
    { position: "Midfielder4", player: null },
    { position: "Attacker1", player: null },
    { position: "Attacker2", player: null },
  ]);

  const handlePlayerSelect = (player: Player) => {
    const isPlayerAlreadySelected = lineupSlots.some(
      (slot) => slot.player?.id === player.id,
    );
    if (isPlayerAlreadySelected) {
      setLineupSlots((prevSlots) =>
        prevSlots.map((slot) =>
          slot.player?.id === player.id ? { ...slot, player: null } : slot,
        ),
      );
      return;
    }

    const firstAvailableSlotIndex = lineupSlots.findIndex(
      (slot) =>
        slot.position.startsWith(player.position) && slot.player === null,
    );

    if (firstAvailableSlotIndex === -1) {
      alert(
        `No available slots for ${player.position}. Please remove a player first.`,
      );
      return;
    }

    setLineupSlots((prevSlots) =>
      prevSlots.map((slot, index) =>
        index === firstAvailableSlotIndex ? { ...slot, player } : slot,
      ),
    );
  };

  const handleSelectEleven = () => {
    const filledSlots = lineupSlots.filter((slot) => slot.player !== null);

    if (filledSlots.length !== 11) {
      alert("Must select exactly 11 players.");
      return;
    }
    
    console.log(filledSlots)
    SaveStartingElevenAction(1,filledSlots);
  };

  return (
    <>
    <div className="flex flex-row border border-l-rose-700 h-screen">
      <FootballPitch lineupSlots={lineupSlots} />
      <div className="flex flex-col border border-blue-600 ml-auto w-96 items-center overflow-auto">
        <OptionList onPlayerSelect={handlePlayerSelect} players={players} />
      </div>
    </div>
    <button onClick={handleSelectEleven}>Test</button>
    </>
  );
}
