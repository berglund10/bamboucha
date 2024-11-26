export function CreateBet() {
    //Skapa ett bet här, med sin unika id och round id: 1.
    //service för att skapa ett bet.
    //Uppdatera en state i parent/available-bets? Kanske revalidate(path/)
    
    const antonsbet = {
        players: "Mina spelare",
        myBet: "100kr",
        betAccepted: false,
    }
    return(
        <div>
            <ul>
                <li><button>{antonsbet.myBet}</button></li>
                <li><button>{antonsbet.myBet}</button></li>
                <li><button>{antonsbet.myBet}</button></li>
            </ul>
        </div>
    )
}