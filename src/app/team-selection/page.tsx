import { teamSelectionService } from "@/features/team-selection/instance";
import { Deadline } from "@/features/team-selection/ui/deadline";
import { PlayerBoard } from "@/features/team-selection/ui/player-board";

export default async function Page() {
  const players = await teamSelectionService.fetchPlayersByTeam();

  return (
    <>
      <Deadline />
      <PlayerBoard players={players} />
    </>
  );
}
