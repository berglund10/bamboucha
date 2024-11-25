"use client";

import { useState } from "react";
import { OptionList } from "./option-list";
import { redirect } from 'next/navigation'


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
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

  const handlePlayerSelect = (player: Player) => {
    if (selectedPlayers.some((p) => p.id === player.id)) {
      setSelectedPlayers((prevPlayers) =>
        prevPlayers.filter((p) => p.id !== player.id),
      );
      return;
    }

    const positionCount: { [key: string]: number } = selectedPlayers.reduce(
      (acc, curr) => {
        acc[curr.position] = (acc[curr.position] || 0) + 1;
        return acc;
      },
      {} as { [key: string]: number },
    );

    if (
      (player.position === "Goalkeeper" &&
        (positionCount["Goalkeeper"] || 0) >= 1) ||
      (player.position === "Defender" &&
        (positionCount["Defender"] || 0) >= 4) ||
      (player.position === "Midfielder" &&
        (positionCount["Midfielder"] || 0) >= 4) ||
      (player.position === "Attacker" && (positionCount["Attacker"] || 0) >= 2)
    ) {
      alert(
        `You can only have 1 goalkeeper, 4 defenders, 4 midfielders, and 2 forwards!`,
      );
      return;
    }

    setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
  };

  const handleSelectEleven = () => {
    if (selectedPlayers.length !== 11) {
      alert("Must select exactly 11 players");
      return;
    }
    redirect("/");
  };

  return (
    <div className="flex flex-row border border-l-rose-700">
      <div className="flex flex-col border-lime-400">
        {selectedPlayers.map((player) => {
          return (
            <p key={player.id}>
              {player.name} {player.id}
            </p>
          );
        })}
        <button onClick={handleSelectEleven}>Select eleven</button>
      </div>
      <div className="flex flex-col border border-blue-600 ml-auto w-96 items-center">
        <OptionList onPlayerSelect={handlePlayerSelect} players={players} />
      </div>
    </div>
  );
}