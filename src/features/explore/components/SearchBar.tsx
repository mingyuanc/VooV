import { Button } from "@/components/ui/button";
import { ArrowDownIcon, MapPinIcon } from "@heroicons/react/24/solid";

interface searchProps {
  starting: string;
  ending: string;
  searchFunction: () => void;
}

export default function SearchBar({
  starting,
  ending,
  searchFunction,
}: searchProps) {
  return (
    <div className="rounded-full bg-primary min-w-[100px] w-fit h-fit px-4 py-1 flex items-center">
      <div className="flex flex-col">
        <div className="flex">
          <ArrowDownIcon className="w-6 h-6 bg-white rounded-full p-1 m-2" />
          <input
            disabled
            className="bg-transparent placeholder-black outline-none  pl-2 w-[160px] md:w-40"
            placeholder="Starting Location"
            value={starting}
          />
        </div>
        <hr className="ml-12 text-black border-black" />

        <div className="flex">
          <MapPinIcon className="w-6 h-6 bg-white rounded-full p-1 m-2" />
          <input
            disabled
            className="bg-transparent placeholder-black outline-none  pl-2 w-[160px] md:w-40 "
            placeholder="Ending Location"
            value={ending}
          />
        </div>
      </div>
      <Button
        variant="outline"
        className="ml-2 font-bold h-fit rounded-full"
        onClick={searchFunction}
      >
        Search
      </Button>
    </div>
  );
}
