"use client";

import Link from "next/link";

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
  const username = "Hubbe";

  return (
    <div className="card bg-base-100 w-full max-w-md">
      <div className="card-body mt-2 pt-2 pb-2">
        {is_accepted ? (
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm">
              Bet of <span className="font-bold">{amount} kr</span> has been
              accepted by{" "}
              <span className="font-bold">
                {accepted_by_user ? `User ${accepted_by_user}` : "Unknown user"}
              </span>
              .
            </p>
            <Link href={`/match/show?id=${bet_id}`} className="w-full">
              <button className="btn btn-primary w-full text-center">
                Show Match
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm">
              Bet of <span className="font-bold">{amount} kr</span>, created by{" "}
              <span className="font-bold">{username}</span>. (Bet ID: {bet_id})
            </p>
            <button
              className="btn btn-secondary w-full text-center"
              onClick={() => acceptBetAction(bet_id)}
            >
              Accept
            </button>
          </div>
        )}
      </div>
    </div>
  );
}