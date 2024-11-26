import Link from "next/link";

type Props = {
    bet_id: number;
}

export function ShowWinner({bet_id} : Props) {
    return (
        <>
            <Link href={`/match/show/winner?id=${bet_id}`}>
            <button>Show winner</button>
          </Link>
        </>
    );
}
