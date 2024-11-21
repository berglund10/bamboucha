
type Props = {
    player: {
      id: number;
      name: string;
      number: number;
      position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward';
      points: number;
    }
};


export function Player({ player } : Props) {
    return (
       <>
       <p>My {player.name} is and my position is {player.position}</p>
       </>
    )
}