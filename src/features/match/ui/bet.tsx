"use client";

import { acceptBetAction } from "../actions";

type Props = {
  user_id: number;
  amount: number;
  is_accepted: boolean;
  accepted_by_user?: number | null;
  bet_id: number;
};

export function Bet({
  bet_id,
  user_id,
  amount,
  is_accepted,
  accepted_by_user,
}: Props) {
  // Hämta riktig user när jag fixar med inloggning function
  const username = "Anton";

  return (
    <>
      {is_accepted ? (
        <p>
          Bet of {amount} has been accepted by{" "}
          {accepted_by_user || "Unknown user"}.
        </p>
      ) : (
        <>
          <p>
            Accept bet of {amount} by user: {username} bet id: {bet_id}
          </p>
          <button onClick={() => acceptBetAction(bet_id)}>Accept Bet</button>
        </>
      )}
    </>
  );
}
