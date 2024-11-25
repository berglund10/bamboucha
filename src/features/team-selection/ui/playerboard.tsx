"use client";


import { useState } from "react";
import { Player } from "./player";

type PlayerType = {
  id: number;
  name: string;
  number: number;
  position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward';
  points: number;
  matchweek: number;
};

type Props = {
  goalkeepers: PlayerType[];
  defenders: PlayerType[];
  midfielders: PlayerType[];
  forwards: PlayerType[];
};

export function PlayerBoard({ goalkeepers, defenders, midfielders, forwards }: Props) {
  // Skapa state för de valda spelarna beroende på position
  const [selectedGoalkeeper, setSelectedGoalkeeper] = useState<PlayerType | null>(null);
  const [selectedDefenders, setSelectedDefenders] = useState<PlayerType[]>([]);
  const [selectedMidfielders, setSelectedMidfielders] = useState<PlayerType[]>([]);
  const [selectedForwards, setSelectedForwards] = useState<PlayerType[]>([]);

  // Definiera maxantal för varje position
  const maxSelections: { [key: string]: number } = {
    'goalkeeper': 1,
    'defender': 4,
    'midfielder': 4,
    'forward': 2,
  };

  // Gemensam funktion för att hantera val av spelare beroende på position
  const handlePlayerClick = (player: PlayerType, position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward') => {
    if (position === 'goalkeeper') {
      // Välj målvakt
      if (selectedGoalkeeper?.id === player.id) {
        // Om samma målvakt är vald, ta bort den
        setSelectedGoalkeeper(null);
      } else {
        // Välj en ny målvakt
        setSelectedGoalkeeper(player);
      }
    } else if (position === 'defender') {
      // Välj försvarare
      setSelectedDefenders(prevDefenders => {
        if (prevDefenders.some(d => d.id === player.id)) {
          // Ta bort försvararen om den redan är vald
          return prevDefenders.filter(d => d.id !== player.id);
        }
        if (prevDefenders.length < maxSelections['defender']) {
          // Lägg till försvararen om max antal inte är nått
          return [...prevDefenders, player];
        }
        return prevDefenders; // Om maxantalet är nått, gör inget
      });
    } else if (position === 'midfielder') {
      // Välj mittfältare
      setSelectedMidfielders(prevMidfielders => {
        if (prevMidfielders.some(m => m.id === player.id)) {
          // Ta bort mittfältaren om den redan är vald
          return prevMidfielders.filter(m => m.id !== player.id);
        }
        if (prevMidfielders.length < maxSelections['midfielder']) {
          // Lägg till mittfältaren om max antal inte är nått
          return [...prevMidfielders, player];
        }
        return prevMidfielders; // Om maxantalet är nått, gör inget
      });
    } else if (position === 'forward') {
      // Välj forward
      setSelectedForwards(prevForwards => {
        if (prevForwards.some(f => f.id === player.id)) {
          // Ta bort forward om den redan är vald
          return prevForwards.filter(f => f.id !== player.id);
        }
        if (prevForwards.length < maxSelections['forward']) {
          // Lägg till forward om max antal inte är nått
          return [...prevForwards, player];
        }
        return prevForwards; // Om maxantalet är nått, gör inget
      });
    }
  };

  const isStartXIValid = () => {
    return (
      selectedGoalkeeper !== null &&
      selectedDefenders.length === maxSelections['defender'] &&
      selectedMidfielders.length === maxSelections['midfielder'] &&
      selectedForwards.length === maxSelections['forward']
    );
  };

  const startXIData = {
    goalkeeper: selectedGoalkeeper?.name,
    defenders: selectedDefenders.map(defender => defender.name),
    midfielders: selectedMidfielders.map(midfielder => midfielder.name),
    forwards: selectedForwards.map(forward => forward.name),
  };

  return (
    <div>
      <p>Goalkeepers</p>
      {goalkeepers.map((goalkeeper) => (
        <div
          key={goalkeeper.id}
          onClick={() => handlePlayerClick(goalkeeper, 'goalkeeper')}
          style={{
            cursor: "pointer",
            backgroundColor: selectedGoalkeeper?.id === goalkeeper.id ? "lightblue" : "white"
          }}
        >
          <Player player={goalkeeper} />
        </div>
      ))}

      <p>Defenders</p>
      {defenders.map((defender) => (
        <div
          key={defender.id}
          onClick={() => handlePlayerClick(defender, 'defender')}
          style={{
            cursor: "pointer",
            backgroundColor: selectedDefenders.some(d => d.id === defender.id) ? "lightblue" : "white"
          }}
        >
          <Player player={defender} />
        </div>
      ))}

      <p>Midfielders</p>
      {midfielders.map((midfielder) => (
        <div
          key={midfielder.id}
          onClick={() => handlePlayerClick(midfielder, 'midfielder')}
          style={{
            cursor: "pointer",
            backgroundColor: selectedMidfielders.some(m => m.id === midfielder.id) ? "lightblue" : "white"
          }}
        >
          <Player player={midfielder} />
        </div>
      ))}

      <p>Forwards</p>
      {forwards.map((forward) => (
        <div
          key={forward.id}
          onClick={() => handlePlayerClick(forward, 'forward')}
          style={{
            cursor: "pointer",
            backgroundColor: selectedForwards.some(f => f.id === forward.id) ? "lightblue" : "white"
          }}
        >
          <Player player={forward} />
        </div>
      ))}

      {/* Visa de valda spelarna */}
      <p>Selected Goalkeeper: {selectedGoalkeeper?.name || "None"}</p>
      <p>Selected Defenders: {selectedDefenders.map(d => d.name).join(", ")}</p>
      <p>Selected Midfielders: {selectedMidfielders.map(m => m.name).join(", ")}</p>
      <p>Selected Forwards: {selectedForwards.map(f => f.name).join(", ")}</p>

{/*       <button
        onClick={() => console.log(startXIData)} 
        disabled={!isStartXIValid()}
      >
        Spara Startelva
      </button> */}
    </div>
  );
}
