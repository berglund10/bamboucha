import { PlayerBoard } from "./playerboard";

export async function PlayerPicker() {

    const fetchPlayers = async (position: string) => {
        try {
            const response = await fetch(
              "https://v3.football.api-sports.io/players/squads?team=496",
              {
                method: "GET",
                headers: {
                  "x-rapidapi-host": "v3.football.api-sports.io",
                  "x-rapidapi-key": "afb6474004b1b6c4b4f239bb253e0593",
                },
              },
            );
            if (response.status === 200) {
              const data = await response.json();
              const playersArray = data.response[0].players;
              const goalies = playersArray.filter(
                (player: { position: string }) => player.position === position,
              );
              return goalies
            }
          } catch (error) {
            console.log(error);
          }
    }

    const goalies = await fetchPlayers("Goalkeeper");
    const defenders = await fetchPlayers("Defender");
    const midfielders = await fetchPlayers("Midfielder");
    const forwards = await fetchPlayers("Attacker");

    console.log(defenders);

    //Fetch all players in serie A. Sen filter
    // const players = fetch(api);
    //
    return (
       <>
       <PlayerBoard goalkeepers={goalies} defenders={defenders} midfielders={midfielders} forwards={forwards}/>
       <p>Filter by position</p>
       <p>Team</p>
       <p>Free search</p>
       <p>Goalkeeper</p>
       <p>Defenders</p>
       <p>Midfielder</p>
       <p>Forward</p>
       </>
    )
}