/* eslint-disable @next/next/no-img-element */
export async function Rules() {
    return (
        <>
            <p className="text-2xl text-center mb-2 mt-4">Rules</p>
            <div className="collapse bg-base-200 collapse-arrow w-full">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">How points are awarded</div>
                <div className="collapse-content">
                <ul>
                        <li>For playing up to 60 minutes: 1</li>
                        <li>For playing 60 minutes or more (excluding stoppage time): 2</li>
                        <li>For each goal scored by a goalkeeper: 10</li>
                        <li>For each goal scored by a defender: 6</li>
                        <li>For each goal scored by a midfielder: 5</li>
                        <li>For each goal scored by a forward: 4</li>
                        <li>For each goal assist: 3</li>
                        <li>For a clean sheet by a goalkeeper or defender: 4</li>
                        <li>For a clean sheet by a midfielder: 1</li>
                        <li>For every 3 shot saves by a goalkeeper: 1</li>
                        <li>For each penalty save: 5</li>
                        <li>For each penalty miss: -2</li>
                        <li>Bonus points for the best players in a match: 1-3</li>
                        <li>For every 2 goals conceded by a goalkeeper or defender: -1</li>
                        <li>For each yellow card: -1</li>
                        <li>For each red card: -3</li>
                        <li>For each own goal: -2</li>
                    </ul>
                </div>
            </div>

            <div className="collapse bg-base-200 w-full collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">Can I have more than one lineup?</div>
                <div className="collapse-content">
                    <p>No, each user is allowed to have only one lineup per round or matchday. You must select your team for each round and cannot change or submit multiple lineups during that time. Make sure to carefully choose your players before submitting your team, as changes will not be permitted once the lineup is locked for the round.</p>
                </div>
            </div>

            <div className="collapse bg-base-200 w-full collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">How many bets can I create per round?</div>
                <div className="collapse-content">
                    <p>There is no limit to the number of bets you can place per round. You are allowed to create and accept as many bets as you want using your selected lineup. However, keep in mind that the outcome of each bet will depend on the performance of the players in your lineup during the round. Make sure to carefully manage your bets and choose wisely to maximize your chances of success.</p>
                </div>
            </div>

        </>
    );
}