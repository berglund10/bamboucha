import { AvailableBets } from "@/features/match/ui/available-bets";
import { CreateBet } from "@/features/match/ui/create-bet";

export default async function Page() {
  const round = 1;
  //const players = await teamSelectionService.fetchPlayersByTeam();
  //const team = await teamSelectionService.getStartingLineupByIdAndRound(1,1);
  //console.log(team);

  return (
    <>
    <div>
      <h1>Place bets</h1>
      <AvailableBets/>
      <CreateBet/>
    </div>
    </>
  );
}