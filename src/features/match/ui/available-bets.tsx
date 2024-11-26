import { betsService } from "../instance";
import { Bet } from "./bet";

export async function AvailableBets() {
  //Fetch all bets!! service.getAll()
  const bets = await betsService.getAllBets();
  console.log(bets);
  return (
    <>
      {bets.map((bet) => {
        return (
          <Bet
            key={bet.id}
            user_id={bet.user_id}
            amount={bet.amount}
            is_accepted={bet.is_accepted}
          />
        );
      })}
    </>
  );
}
