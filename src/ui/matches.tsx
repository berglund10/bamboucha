/* eslint-disable @next/next/no-img-element */
export async function Matches() {
    return (
        <>
            <div className="container mx-auto p-4 mb-20 mt-2">
                <h2 className="text-2xl font-semibold text-center mb-10 mt-4 font-mono">Matchday 14</h2>
                <div className="space-y-4">
                    <div className="pb-4 flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <p className="text-lg font">Bologna</p>
                        </div>
                        <img src="bologna.png" alt="Bologna Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <div className="flex items-center space-x-4">
                            <img src="venezia.png" alt="Venezia Logo" className="w-12 h-12" />
                            <p className="text-lg">Venezia</p>
                        </div>
                    </div>
                    <div className="mr-3 pb-4 flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <p className="text-lg">Udinese</p>
                        </div>
                        <img src="udinese.png" alt="Udinese Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <div className="flex items-center space-x-4">
                            <img src="genoa.png" alt="Genoa Logo" className="w-12 h-12" />
                            <p className="text-lg">Genoa</p>
                        </div>
                    </div>
                    <div className="mr-2 pb-4 flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <p className="text-lg">Parma</p>
                        </div>
                        <img src="parma.png" alt="Parma Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <div className="flex items-center space-x-4">
                            <img src="lazio.png" alt="Lazio Logo" className="w-12 h-12" />
                            <p className="text-lg">Lazio</p>
                        </div>
                    </div>
                    <div className="flex pb-4 items-center justify-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <p className="text-lg">Torino</p>
                        </div>
                        <img src="torino.png" alt="Torino Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <div className="flex items-center space-x-4">
                            <img src="napoli.png" alt="Napoli Logo" className="w-12 h-12" />
                            <p className="text-lg">Napoli</p>
                        </div>
                    </div>
                    <div className="mr-12 pb-4 flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <p className="text-lg">Fiorentina</p>
                        </div>
                        <img src="fiorentina.png" alt="Fiorentina Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <div className="flex items-center space-x-4">
                            <img src="inter.png" alt="Inter Logo" className="w-12 h-12" />
                            <p className="text-lg">Inter</p>
                        </div>
                    </div>
                    <div className="ml-4 pb-4 flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <p className="text-lg">Roma</p>
                        </div>
                        <img src="roma.png" alt="Roma Logo" className="w-12 h-12" />
                        <span className="text-lg font-semibold">VS</span>
                        <div className="flex items-center space-x-4">
                            <img src="atalanta.png" alt="Atalanta Logo" className="w-12 h-12" />
                            <p className="text-lg">Atalanta</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}