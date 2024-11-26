export function AvailableBets() {
    //Fetch all bets!! service.getAll()
    
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