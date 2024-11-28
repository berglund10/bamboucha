/* eslint-disable @next/next/no-img-element */
export async function Matches2() {
    return (
        <>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-semibold text-center mb-10 mt-4">Serie A - Matchday 14</h2>
                <div className="space-y-4">
                    {/* Match 1 */}
                    <div className="pb-4 flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <p className="text-lg font-bold">Bologna</p>
                        </div>
                        <img src="bologna.png" alt="Bologna Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <div className="flex items-center space-x-4">
                            <img src="venezia.png" alt="Venezia Logo" className="w-12 h-12" />
                            <p className="text-lg font-bold">Venezia</p>
                        </div>
                    </div>
                    {/* Match 2 */}
                    <div className="mr-3 pb-4 flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <p className="text-lg font-bold">Udinese</p>
                        </div>
                        <img src="udinese.png" alt="Udinese Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <div className="flex items-center space-x-4">
                            <img src="genoa.png" alt="Genoa Logo" className="w-12 h-12" />
                            <p className="text-lg font-bold">Genoa</p>
                        </div>
                    </div>
                    {/* Match 3 */}
                    <div className="mr-2 pb-4 flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <p className="text-lg font-bold">Parma</p>
                        </div>
                        <img src="parma.png" alt="Parma Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <div className="flex items-center space-x-4">
                            <img src="lazio.png" alt="Lazio Logo" className="w-12 h-12" />
                            <p className="text-lg font-bold">Lazio</p>
                        </div>
                    </div>
                    {/* Match 4 */}
                    <div className="flex pb-4 items-center justify-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <p className="text-lg font-bold">Torino</p>
                        </div>
                        <img src="torino.png" alt="Torino Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <div className="flex items-center space-x-4">
                            <img src="napoli.png" alt="Napoli Logo" className="w-12 h-12" />
                            <p className="text-lg font-bold">Napoli</p>
                        </div>
                    </div>
                    {/* Match 5 */}
                    <div className="mr-12 pb-4 flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <p className="text-lg font-bold">Fiorentina</p>
                        </div>
                        <img src="fiorentina.png" alt="Fiorentina Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <div className="flex items-center space-x-4">
                            <img src="inter.png" alt="Inter Logo" className="w-12 h-12" />
                            <p className="text-lg font-bold">Inter</p>
                        </div>
                    </div>
                    {/* Match 7 */}
                    <div className="ml-4 pb-4 flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <p className="text-lg font-bold">Roma</p>
                        </div>
                        <img src="roma.png" alt="Roma Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <div className="flex items-center space-x-4">
                            <img src="atalanta.png" alt="Atalanta Logo" className="w-12 h-12" />
                            <p className="text-lg font-bold">Atalanta</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}