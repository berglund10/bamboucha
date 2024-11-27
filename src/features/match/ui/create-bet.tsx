import { placeBetAction } from "../actions";

export function CreateBet() {
  //Skapa ett bet här, med sin unika id och round id: 1.
  //service för att skapa ett bet.
  //Uppdatera en state i parent/available-bets? Kanske revalidate(path/)

  return (
    <div>
      <form action={placeBetAction}>
        <label className="block">
          <span className="label-text">How much do you want to bet?</span>
          <div className="flex items-center space-x-2 mt-2">
            <input
              type="text"
              name="amount"
              placeholder="Type here"
              className="input input-bordered"
            />
            <button type="submit" className="btn">
              Create
            </button>
          </div>
        </label>
      </form>
    </div>
  );  
}
