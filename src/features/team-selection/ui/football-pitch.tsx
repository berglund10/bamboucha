type Player = {
    id: number;
    name: string;
    age: number;
    number: number;
    position: string;
    photo: string;
  };
  
  type LineupSlot = {
    position: string;
    player: Player | null;
  };
  
  type PositionGrid = {
    [key: string]: { row: number; col: number };
    Goalkeeper: { row: 1; col: 3 };
    Defender1: { row: 2; col: 2 };
    Defender2: { row: 2; col: 3 };
    Defender3: { row: 2; col: 4 };
    Defender4: { row: 2; col: 5 };
    Midfielder1: { row: 3; col: 2 };
    Midfielder2: { row: 3; col: 3 };
    Midfielder3: { row: 3; col: 4 };
    Midfielder4: { row: 3; col: 5 };
    Attacker1: { row: 4; col: 3 };
    Attacker2: { row: 4; col: 4 };
  };
  
  type Props = {
    lineupSlots: LineupSlot[];
  };
  
  export function FootballPitch({ lineupSlots }: Props) {
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
  
    return (
      <div
        className="grid grid-rows-4 grid-cols-6 gap-4 p-6 w-2/3 bg-cover bg-center"
        style={{ backgroundImage: "url('/path/to/your/football-pitch.jpg')" }}
      >
        {lineupSlots.map((slot, index) => {
          const gridPosition = positionGrid[slot.position];
          const isGoalkeeper = slot.position === "Goalkeeper";
  
          return isGoalkeeper ? (
            <div
              key={index}
              className="row-start-1 col-span-6 flex justify-center"
            >
              {slot.player ? (
                <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white">
                  {slot.player.number}
                </div>
              ) : (
                <div className="bg-gray-500 rounded-full w-12 h-12 flex items-center justify-center text-white">
                  -
                </div>
              )}
            </div>
          ) : (
            
            gridPosition && (
              <div
                key={index}
                className={`row-start-${gridPosition.row} col-start-${gridPosition.col} flex justify-center`}
              >
                {slot.player ? (
                  <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white">
                    {slot.player.number}
                  </div>
                ) : (
                  <div className="bg-gray-500 rounded-full w-12 h-12 flex items-center justify-center text-white">
                    -
                  </div>
                )}
              </div>
            )
          );
        })}
      </div>
    );
  }
  