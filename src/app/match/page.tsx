import { AvailableBets } from "@/features/match/ui/available-bets";
import { CreateBet } from "@/features/match/ui/create-bet";

export default async function Page() {
  const round = 1;
  //const players = await teamSelectionService.fetchPlayersByTeam();
  //const team = await teamSelectionService.getStartingLineupByIdAndRound(1,1);
  //console.log(team);

  return (
    <>
      <div className="flex flex-col items-center">
        <AvailableBets />
        <CreateBet />
      </div>
    </>
  );
}
