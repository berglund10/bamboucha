import { Matches } from "@/ui/matches";
import { Rules } from "@/ui/rules";

export default function Page() {
    return (
      <>
        <div className="flex">
          <div className="w-2/3 pr-4 border border-white">
            <Matches />
          </div>
          <div className="w-1/3 pl-4 border-white border">
            <Rules />
          </div>
        </div>
      </>
    );
  }
  