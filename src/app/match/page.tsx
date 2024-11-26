import { teamSelectionService } from "@/features/team-selection/instance";

export default async function Page() {
  //const players = await teamSelectionService.fetchPlayersByTeam();
  const team = await teamSelectionService.getStartingLineupByIdAndRound(1,1);
  console.log(team);

  return (
    <>
    SaveStartingElevenAction
    </>
  );
}