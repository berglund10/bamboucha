/* eslint-disable @next/next/no-img-element */
export async function Matches() {
    return (
        <>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-semibold text-center mb-6">Serie A - Matchday 14</h2>

                <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center justify-center space-x-4">
                        <p className="text-lg font-bold">Cagliari</p>
                        <img src="cagliari.png" alt="Inter Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <img src="verona.png" alt="Juventus Logo" className="w-12 h-12" />
                        <p className="text-lg font-bold">Verona</p>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <p className="text-lg font-bold">Milan</p>
                        <img src="milan.png" alt="Milan Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <img src="empoli.png" alt="Lazio Logo" className="w-12 h-12" />
                        <p className="text-lg font-bold">Empoli</p>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <p className="text-lg font-bold">Bologna</p>
                        <img src="bologna.png" alt="Parma Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <img src="venezia.png" alt="Roma Logo" className="w-12 h-12" />
                        <p className="text-lg font-bold">Venezia</p>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <p className="text-lg font-bold">Udinese</p>
                        <img src="udinese.png" alt="Parma Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <img src="genoa.png" alt="Roma Logo" className="w-12 h-12" />
                        <p className="text-lg font-bold">Genoa</p>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <p className="text-lg font-bold">Parma</p>
                        <img src="parma.png" alt="Parma Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <img src="lazio.png" alt="Roma Logo" className="w-12 h-12" />
                        <p className="text-lg font-bold">Lazio</p>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <p className="text-lg font-bold">Torino</p>
                        <img src="torino.png" alt="Parma Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <img src="napoli.png" alt="Roma Logo" className="w-12 h-12" />
                        <p className="text-lg font-bold">Naplio</p>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <p className="text-lg font-bold">Fiorentina</p>
                        <img src="fiorentina.png" alt="Parma Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <img src="inter.png" alt="Roma Logo" className="w-12 h-12" />
                        <p className="text-lg font-bold">Inter</p>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <p className="text-lg font-bold">Roma</p>
                        <img src="roma.png" alt="Parma Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <img src="atalanta.png" alt="Roma Logo" className="w-12 h-12" />
                        <p className="text-lg font-bold">Atalanta</p>
                    </div>

                </div>
            </div>
        </>
    );
}  