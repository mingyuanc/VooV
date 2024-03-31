import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  MapPinIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

interface searchProps {
  starting: string;
  ending: string;
  searchFunction: () => void;
  setStarting: (x: string) => void;
  setEnding: (x: string) => void;
}

export default function SearchBar({
  starting,
  ending,
  searchFunction,
  setStarting,
  setEnding,
}: searchProps) {
  return (
    <div className="rounded-full bg-primary min-w-[100px] w-fit h-fit px-4 py-1 flex items-center">
      <div className="flex flex-col">
        <div className="flex">
          <ArrowDownIcon className="w-6 h-6 bg-white rounded-full p-1 m-2" />
          <div
            className={`bg-transparent flex items-center outline-none pl-2 w-[140px] md:w-39 cursor-pointer ${
              starting === "" ? "text-gray-600" : starting
            }`}
          >
            {starting === "" ? "Pick up at?" : starting}
          </div>
          <XCircleIcon
            className={`w-6 h-6 rounded-full p-1 m-2 ${
              starting === "" ? "text-primary" : ""
            }`}
            onClick={() => {
              setStarting("");
            }}
          />
        </div>

        <hr className="ml-12 text-black border-black" />

        <div className="flex">
          <MapPinIcon className="w-6 h-6 bg-white rounded-full p-1 m-2" />
          <div
            className={`bg-transparent flex items-center outline-none pl-2 w-[140px] md:w-39 cursor-pointer ${
              ending === "" ? "text-gray-600" : ending
            }`}
          >
            {ending === "" ? "Drop off at?" : ending}
          </div>
          <XCircleIcon
            className={`w-6 h-6 rounded-full p-1 m-2 ${
              ending === "" ? "text-primary disabled" : "cursor-pointer"
            }`}
            onClick={() => {
              setEnding("");
            }}
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
