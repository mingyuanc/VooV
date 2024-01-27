import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const max = 99999;
const min = 10000;
const minSeats = 0;
const maxSeats = 40;
const minDepartTime = 0;
const maxDepartTime = 120;

interface cardProps {
  bookFunction: (x: number, y: number) => void;
  starting: string;
  ending: string;
}

export default function BusCard({ bookFunction, starting, ending }: cardProps) {
  const [seatsLeft, setSeatsLeft] = useState(0);
  const [busNumber, setBusNumber] = useState(10000);
  const [departTime, setDepartTime] = useState(0);
  const [estArrivalTime, setEstArrivalTime] = useState(new Date());

  useEffect(() => {
    const randomSeats =
      Math.floor(Math.random() * (maxSeats - minSeats + 1)) + minSeats;
    const randomDepartTime =
      Math.floor(Math.random() * (maxDepartTime - minDepartTime + 1)) +
      minDepartTime;
    setBusNumber(Math.floor(Math.random() * (max - min + 1)) + min);

    setSeatsLeft(randomSeats);
    setDepartTime(randomDepartTime);

    const estimatedArrivalTime = new Date(
      new Date().getTime() + randomDepartTime * 60000
    );
    setEstArrivalTime(estimatedArrivalTime);

    console.log(randomSeats, randomDepartTime, estimatedArrivalTime);
  }, []);

  return (
    <Card className="p-1 mb-2" key={Math.random()}>
      <CardHeader>
        <CardTitle>{`${starting} to ${ending}`}</CardTitle>
        <CardDescription>Bus Number: {busNumber} </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center md:items-end md:flex-row">
        <div className="flex flex-col ">
          <div>
            {" "}
            Seats left:{" "}
            {seatsLeft == 0 ? (
              <span className="text-red-500">None</span>
            ) : (
              <span className="text-green-600">{seatsLeft}</span>
            )}
          </div>
          <div>
            {" "}
            Departure time:{" "}
            {departTime == 0 ? (
              <span className="text-red-500">Left</span>
            ) : (
              <span className="text-green-600">{departTime} minutes</span>
            )}
          </div>
          <div>
            {" "}
            Estimated arrival time:{" "}
            {estArrivalTime.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
        </div>
        <Button
          className="mt-5  md:ml-5"
          onClick={() => bookFunction(seatsLeft, departTime)}
        >
          {" "}
          Book Now!
        </Button>
      </CardContent>
    </Card>
  );
}
