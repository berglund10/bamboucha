import { BetsCard } from "@/ui/bets-card";
import { SelectTeamCard } from "@/ui/select-team-card";
import { StudyCard } from "@/ui/study-card";

export default async function Home() {
  return (
    <>
      <div className="flex flex-row justify-center mt-24">
        <StudyCard />
        <SelectTeamCard />
        <BetsCard />
      </div>
    </>
  );
}
