import { PlayerType } from "../types";

type Props = {
  player: {
    id: number;
    name: string;
    age: number;
    number: number;
    position: string;
    photo: string;
  };
  onPlayerSelect: (player: PlayerType) => void;
};

export function Player({ player, onPlayerSelect }: Props) {
  return (
    <>
      <div
        className="font-mono ml-4 mb-1"
        onClick={() => onPlayerSelect(player)}
      >
        {player.name}
      </div>
    </>
  );
}
