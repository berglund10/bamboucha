import { betsService } from "@/features/match/instance";
import { SelectedLineup } from "@/features/match/ui/selected-lineup";
import { ShowWinner } from "@/features/match/ui/show-winner";
import { teamSelectionService } from "@/features/team-selection/instance";

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const id = (await searchParams).id;
    const bet = await betsService.getBetById(Number(id));
    const user_id = bet.user_id;
    const accepted_by_user_id = bet.accepted_by_user_id as number; //Detta blir den som är inloggad och som jag visar på fredag

    const betCreatorLineup = await teamSelectionService.getStartingLineupByIdAndRound(user_id, 1);

    const juventus = await teamSelectionService.fetchPlayersByTeam();
    const betAccepterLineup = await teamSelectionService.getStartingLineupByIdAndRound(accepted_by_user_id, 1);

    const filteredPlayers = juventus.filter(player =>
        betCreatorLineup.some(lineup => lineup.player_id === player.id)
    );

    const filteredPlayers2 = juventus.filter(player =>
        betAccepterLineup.some(lineup => lineup.player_id === player.id)
    );


    console.log(filteredPlayers.length);



    return (
        <div className="flex flex-col items-center">
            Match info {id} Your opponent lineup
            <SelectedLineup players={filteredPlayers} />
            <p>Your lineup</p>
            <SelectedLineup className="rotate-180" players={filteredPlayers2} />
            <ShowWinner bet_id={Number(id)}/>
        </div>

    );
}
