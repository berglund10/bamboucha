type Props = {
  user_id: number;
  amount: number;
  is_accepted: boolean;
  accepted_by_user?: string;
  onAccept?: () => void;
};

export async function Bet({
  user_id,
  amount,
  is_accepted,
  accepted_by_user,
  onAccept,
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
            Accept bet of {amount} by user: {username}
          </p>
          <button onClick={onAccept}>Accept Bet</button>
        </>
      )}
    </>
  );
}
