/* eslint-disable @next/next/no-img-element */
type Player = {
    id: number;
    name: string;
    age: number;
    number: number;
    position: string;
    photo: string;
  };
  
  type PositionGrid = {
    [key: string]: { row: number; col: number };
  };
  
  type Props = {
    players: Player[];
    className?: string;
  };
  
  export function SelectedLineup({ players, className }: Props) {
    const positionGrid: PositionGrid = {
      Goalkeeper: { row: 1, col: 3 },
      Defender1: { row: 2, col: 2 },
      Defender2: { row: 2, col: 3 },
      Defender3: { row: 2, col: 4 },
      Defender4: { row: 2, col: 5 },
      Midfielder1: { row: 3, col: 2 },
      Midfielder2: { row: 3, col: 3 },
      Midfielder3: { row: 3, col: 4 },
      Midfielder4: { row: 3, col: 5 },
      Attacker1: { row: 4, col: 3 },
      Attacker2: { row: 4, col: 4 },
    };

    if (players.length !== 11) {
      console.log("The StartingEleven component requires exactly 11 players.");
    }
  
    return (
      <div className={`grid grid-rows-4 grid-cols-6 gap-4 p-6 w-2/4 bg-image bg-cover bg-center ${className}`}>
        {players.map((player, index) => {
          const positionKey = Object.keys(positionGrid)[index]; // Hämta positionen i ordning
          const gridPosition = positionGrid[positionKey];
  
          if (!gridPosition) {
            console.warn(`Grid position for ${positionKey} is not defined.`);
            return null;
          }
  
          return (
            <div
              key={player.id}
              style={{
                gridRowStart: gridPosition.row,
                gridColumnStart: gridPosition.col,
              }}
              className="flex justify-center"
            >
              <div className={`rounded-full w-12 h-12 flex items-center justify-center ${className}`}>
                <img
                  src={player.photo}
                  alt={player.name}
                  className="rounded-full w-12 h-12 object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }  