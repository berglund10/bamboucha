"use client";

import { useState } from "react";
import { Player } from "./player";

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
  onPlayerSelect: (player: Player) => void;
  onHandleSelectEleven: () => void;
};

export function OptionList({ players, onPlayerSelect, onHandleSelectEleven }: Props) {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value;
    console.log(players);
    console.log(selectedFilter);
    setFilter(selectedFilter);
  };

  const filteredPlayers =
    filter === "all"
      ? players
      : players.filter((player) => player.position === filter);

  const groupedPlayers = filteredPlayers.reduce(
    (acc, player) => {
      if (!acc[player.position]) {
        acc[player.position] = [];
      }
      acc[player.position].push(player);
      return acc;
    },
    {} as { [key: string]: Player[] },
  );

  return (
    <>
      <div className="flex flex-col border-4 border-white ml-auto w-96 items-center overflow-auto">
      <label className="mb-4 mt-4 font-mono" htmlFor="filter">
        Select players
      </label>
      <select
        className="select select-bordered w-full max-w-xs font-mono"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
      >
        <optgroup label="Global">
          <option value="all">All Players</option>
        </optgroup>
        <optgroup label="Position">
          <option value="Goalkeeper">Goalkeepers</option>
          <option value="Defender">Defenders</option>
          <option value="Midfielder">Midfielders</option>
          <option value="Attacker">Forwards</option>
        </optgroup>
        <optgroup label="Team">
          <option value="Atalanta">Atalanta</option>
          <option value="Bologna">Bologna</option>
          <option value="Cagliari">Cagliari</option>
          <option value="Como">Como</option>
          <option value="Empoli">Empoli</option>
          <option value="Fiorentina">Fiorentina</option>
          <option value="Genoa">Genoa</option>
          <option value="Hellas Verona">Hellas Verona</option>
          <option value="Internazionale">Internazionale</option>
          <option value="Juventus">Juventus</option>
          <option value="Lazio">Lazio</option>
          <option value="Lecce">Lecce</option>
          <option value="AC Milan">AC Milan</option>
          <option value="Monza">Monza</option>
          <option value="Napoli">Napoli</option>
          <option value="Parma">Parma</option>
          <option value="Roma">Roma</option>
          <option value="Torino">Torino</option>
          <option value="Udinese">Udinese</option>
          <option value="Venezia">Venezia</option>
        </optgroup>
      </select>
      <div>
        {Object.keys(groupedPlayers).map((position) => (
          <div key={position}>
            <p className="font-mono mt-2 bg-white w-96 text-black text-center h-10 leading-10">
              {position}s
            </p>
            {groupedPlayers[position].map((player) => (
              <Player
                onPlayerSelect={onPlayerSelect}
                key={player.id}
                player={player}
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={onHandleSelectEleven} className="font-mono mt-2 bg-white w-96 text-black text-center h-10 leading-10">
        Select eleven</button>
      </div>
    </>
  );
}
