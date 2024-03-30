import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import ResultsTabs from "./ResultsTabs";

interface ResultsHeaderProps {
  src: string;
  dest: string;
  dates: string[];
  activeTab: number;
  onTabClick: (e: Event, x: number) => void;
}

export default function ResultsHeader({
  src,
  dest,
  dates,
  activeTab,
  onTabClick,
}: ResultsHeaderProps) {
  const router = useRouter();

  return (
    <div className="bg-white w-screen max-w-full min-h-fit overflow-x-hidden">
      <div className="max-h-20 flex justify-center items-center pt-20 pb-6 z-1 ">
        <ChevronLeftIcon
          className="w-10 h-10 left-4 absolute bg-white rounded-full p-1 m-2 hover:cursor-pointer"
          onClick={() => router.push("/explore")}
        />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold ">VooV</h1>
          <h2 className="text-md font-semibold">
            <span className="text-blue-500">{src}</span> to{" "}
            <span className="text-green-500">{dest}</span>
          </h2>
        </div>
      </div>

      <ResultsTabs
        dates={dates}
        activeTab={activeTab}
        onTabClick={onTabClick}
      />
    </div>
  );
}
