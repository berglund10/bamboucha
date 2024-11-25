"use client";

import { useState } from "react";

export function OptionList() {
    const [filter, setFilter] = useState("all");

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFilter = event.target.value;
        console.log(selectedFilter);
        setFilter(selectedFilter)
    };


    return (
        <>
                <label className="mb-4 mt-4" htmlFor="filter">Select players</label>
                <select className="select select-bordered w-full max-w-xs" id="filter" value={filter} onChange={handleFilterChange}>
                    <optgroup label="Global">
                        <option value="all">All Players</option>
                    </optgroup>
                    <optgroup label="Position">
                        <option value="Goalkeeper">Goalkeepers</option>
                        <option value="Defender">Defenders</option>
                        <option value="Midfielder">Midfielders</option>
                        <option value="Attacker">Forwards</option>
                    </optgroup>
                    <optgroup label="Team">
                        <option value="Atalanta">Atalanta</option>
                        <option value="Bologna">Bologna</option>
                        <option value="Cagliari">Cagliari</option>
                        <option value="Como">Como</option>
                        <option value="Empoli">Empoli</option>
                        <option value="Fiorentina">Fiorentina</option>
                        <option value="Genoa">Genoa</option>
                        <option value="Hellas Verona">Hellas Verona</option>
                        <option value="Internazionale">Internazionale</option>
                        <option value="Juventus">Juventus</option>
                        <option value="Lazio">Lazio</option>
                        <option value="Lecce">Lecce</option>
                        <option value="AC Milan">AC Milan</option>
                        <option value="Monza">Monza</option>
                        <option value="Napoli">Napoli</option>
                        <option value="Parma">Parma</option>
                        <option value="Roma">Roma</option>
                        <option value="Torino">Torino</option>
                        <option value="Udinese">Udinese</option>
                        <option value="Venezia">Venezia</option>
                    </optgroup>
                </select>
        </>
    )
}