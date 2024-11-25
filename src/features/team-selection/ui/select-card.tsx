import { OptionList } from "./option-list";
import { PlayerBoard } from "./playerboard";

export function SelectCard() {
    return (
        <div className="flex flex-row border border-l-rose-700">
            <PlayerBoard goalkeepers={[]} defenders={[]} midfielders={[]} forwards={[]}/>
        <div className="flex flex-col border border-blue-600 ml-auto w-96 items-center">
            <OptionList/>
            <input type="text" placeholder="Type here" className="mt-4 input input-bordered w-full max-w-xs" />
        </div>
        </div>
    )
}