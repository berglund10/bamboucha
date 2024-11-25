"use client";

import { useState } from "react";
import { OptionList } from "./option-list";
import { PlayerBoard } from "./playerboard";

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

export function SelectCard({ players} : Props) {
    const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

    console.log(selectedPlayers)

    const handlePlayerSelect = (player: Player) => {
        setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
      };
    
    return (
        <div className="flex flex-row border border-l-rose-700">
        {selectedPlayers.map((data) => {
            return <p key={data.id}>{data.name}</p>
        })}
{/*             <PlayerBoard goalkeepers={[]} defenders={[]} midfielders={[]} forwards={[]}/> */}
        <div className="flex flex-col border border-blue-600 ml-auto w-96 items-center">
            <OptionList onPlayerSelect={handlePlayerSelect} players={players}/>
            <input type="text" placeholder="Type here" className="mt-4 input input-bordered w-full max-w-xs" />
        </div>
        </div>
    )
}