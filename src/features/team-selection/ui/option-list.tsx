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
  };

export function OptionList( { players}: Props) {
    const [filter, setFilter] = useState("all");

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFilter = event.target.value;
        console.log(players)
        console.log(selectedFilter);
        setFilter(selectedFilter)
    };

    const filteredPlayers = filter === 'all'
    ? players
    : players.filter((player) => player.position === filter);

    const groupedPlayers = filteredPlayers.reduce((acc, player) => {
        // Kollar om det redan finns en grupp för den här positionen
        if (!acc[player.position]) {
          // Om inte, skapa en ny grupp för den positionen
          acc[player.position] = [];
        }
    
        // Lägg till spelaren i rätt grupp
        acc[player.position].push(player);
    
        return acc;
      }, {} as { [key: string]: Player[] });


    return (
        <>
                <label className="mb-4 mt-4" htmlFor="filter">Select players</label>
                <select className="select select-bordered w-full max-w-xs" id="filter" value={filter} onChange={handleFilterChange}>
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
            <p>{position}s</p>
              {groupedPlayers[position].map((player) => (
                <Player key={player.id} player={player}/>
              ))}
          </div>
        ))}
      </div>
        </>
    )
}