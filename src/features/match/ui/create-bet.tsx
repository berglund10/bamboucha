import { placeBetAction } from "../actions";

export function CreateBet() {
  //Skapa ett bet här, med sin unika id och round id: 1.
  //service för att skapa ett bet.
  //Uppdatera en state i parent/available-bets? Kanske revalidate(path/)

  return (
    <div>
      <form action={placeBetAction}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">How much do you want to bet?</span>
          </div>
          <input
            type="text"
            name="amount"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label"></div>
        </label>
      </form>
    </div>
  );
}
