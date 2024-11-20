import { Defender } from "./defender";
import { Forward } from "./forward";
import { GoalKeeper } from "./goalkeeper";
import { Midfielder } from "./midfielder";

export function PlayerBoard() {
     return (
        <>
        <GoalKeeper/>
        <Defender/>
        <Midfielder/>
        <Forward/>
        </>
     )
}