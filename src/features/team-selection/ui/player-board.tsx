"use client";

import { useState } from "react";
import { OptionList } from "./option-list";
import { redirect } from "next/navigation";

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
    { position: "Defender", player: null },
    { position: "Defender", player: null },
    { position: "Defender", player: null },
    { position: "Defender", player: null },
    { position: "Midfielder", player: null },
    { position: "Midfielder", player: null },
    { position: "Midfielder", player: null },
    { position: "Midfielder", player: null },
    { position: "Attacker", player: null },
    { position: "Attacker", player: null },
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
      (slot) => slot.position === player.position && slot.player === null,
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
    
    redirect("/match")
  };

  return (
    <div className="flex flex-row border border-l-rose-700">
      <div className="flex flex-col border-lime-400 w-1/2 p-4">
        <h3 className="text-lg font-bold mb-4">Starting Eleven</h3>
        <div className="grid grid-cols-1 gap-2">
          {lineupSlots.map((slot, index) => (
            <div
              key={index}
              className="border border-gray-500 p-2 flex justify-between"
            >
              <div>
                <strong>{slot.position}</strong>
              </div>
              <div>
                {slot.player ? (
                  <span>
                    {slot.player.name} (#{slot.player.number})
                  </span>
                ) : (
                  <span className="text-gray-400">Empty</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleSelectEleven}
          className="mt-4 p-2 bg-blue-500 text-white"
        >
          Select Eleven
        </button>
      </div>

      <div className="flex flex-col border border-blue-600 ml-auto w-96 items-center">
        <OptionList onPlayerSelect={handlePlayerSelect} players={players} />
      </div>
    </div>
  );
}
