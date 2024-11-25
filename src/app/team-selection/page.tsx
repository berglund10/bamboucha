import { teamSelectionService } from "@/features/team-selection/instance";
import { Deadline } from "@/features/team-selection/ui/deadline"
import { SelectCard } from "@/features/team-selection/ui/select-card"

export default async function Page() {
    const players = await teamSelectionService.fetchPlayersByTeam();
    
    return (
        <>
        <Deadline/>
        {/* <PlayerPicker/> */}
{/*         <div>Select eleven button</div> */}
        <SelectCard players={players}/>
        </>
    )
}