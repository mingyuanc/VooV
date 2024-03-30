import { BellAlertIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { ResultsDrawer } from "./ResultsDrawer";

const max = 99999;
const min = 10000;
const minSeats = 1;
const maxSeats = 40;

export default function ResultEntry({
  time,
  src,
  dest,
}: {
  time: string;
  src: string;
  dest: string;
}) {
  const [seatsLeft, setSeatsLeft] = useState(0);
  const [busNumber, setBusNumber] = useState(10000);
  const [isAvail, setIsAvail] = useState(true);

  useEffect(() => {
    const randomSeats =
      Math.floor(Math.random() * (maxSeats - minSeats + 1)) + minSeats;
    const isAvail = Math.random() < 0.8;

    setBusNumber(Math.floor(Math.random() * (max - min + 1)) + min);

    setSeatsLeft(randomSeats);
    setIsAvail(isAvail);
  }, []);
  const resultsDetails = (
    <div
      className={`flex p-2 pl-4 border-gray-200 border-b ${
        isAvail ? "hover:cursor-pointer" : "bg-gray-100 text-gray-500"
      }`}
    >
      <div className="flex flex-col pr-14">
        <span className="text-lg font-semibold">{time}</span>
        <span className="text-md text-gray-500">30 min</span>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold">
          From {src} to {dest}
        </span>

        <span className="text-md text-gray-500">Bus #{busNumber}</span>
      </div>
      <div className="flex flex-col ml-auto mr-2">
        {isAvail ? (
          `${seatsLeft} seats left`
        ) : (
          <div className="flex items-center">
            Notify me!
            <BellAlertIcon className="w-6 h-6 p-1" />
          </div>
        )}
      </div>
    </div>
  );
  return (
    <ResultsDrawer
      src={src}
      dest={dest}
      disabled={!isAvail}
      renderCard={() => resultsDetails}
    />
  );
}
