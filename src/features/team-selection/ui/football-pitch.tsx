/* eslint-disable @next/next/no-img-element */
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
    <div className="grid grid-rows-4 grid-cols-6 gap-4 p-6 w-2/3 bg-image bg-cover bg-center">
      {lineupSlots.map((slot, index) => {
        const gridPosition = positionGrid[slot.position];

        if (!gridPosition) {
          console.warn(`Position ${slot.position} is not defined in the grid.`);
          return null;
        }

        const isGoalkeeper = slot.position === "Goalkeeper";
        if (isGoalkeeper) {
          return (
            <div
              key={index}
              className="row-start-1 col-span-6 flex justify-center"
            >
              {slot.player ? (
                <div className="rounded-full w-12 h-12 flex items-center justify-center">
                  <img
                    src={slot.player.photo}
                    alt={slot.player.name}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                </div>
              ) : (
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-white">
                  -
                </div>
              )}
            </div>
          );
        }

        return (
          <div
            key={index}
            style={{
              gridRowStart: gridPosition.row,
              gridColumnStart: gridPosition.col,
            }}
            className="flex justify-center"
          >
            {slot.player ? (
              <div className="rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  src={slot.player.photo}
                  alt={slot.player.name}
                  className="rounded-full w-12 h-12 object-cover"
                />
              </div>
            ) : (
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-white">
                -
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
