
type Props = {
    player: {
      id: number;
      name: string;
      age: number;
      number: number;
      position: string;
      photo: string;
    }
};


export function Player({ player } : Props) {
    return (
       <>
       <div>{player.name}</div>
       </>
    )
}