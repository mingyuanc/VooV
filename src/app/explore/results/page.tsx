"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import ToastBuilder from "@/components/notifications/ToastBuilder";
import BusCard from "./BusCard";

export default function Results() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const book = (seats: number, departTime: number) => {
    if (seats == 0) {
      ToastBuilder.error("No seats left").send();
      return;
    }
    if (departTime == 0) {
      ToastBuilder.error("Bus has left").send();
      return;
    }
    ToastBuilder.success("Successfully booked").send();
    router.back();
  };
  return (
    <div className="flex flex-col items-center bg-secondary min-h-screen">
      <h1 className="text-3xl font-bold mt-14 my-4">Results </h1>
      <h3 className="text-xl font-bold my-4 mx-2 text-center">
        Busses heading from
        <span className="text-blue-500">
          {" "}
          {searchParams.get("starting")}
        </span>{" "}
        to <span className="text-primary"> {searchParams.get("ending")}</span>
      </h3>
      {Array.from({ length: 5 }).map((x) => (
        <BusCard
          key={Math.random()}
          bookFunction={book}
          starting={searchParams.get("starting")!}
          ending={searchParams.get("ending")!}
        />
      ))}
      <div className="flex w-[220px] justify-between">
        <Button
          variant="destructive"
          className="mb-1 w-[100px]"
          onClick={() => router.back()}
        >
          {" "}
          Back{" "}
        </Button>
        <Button
          variant="outline"
          className="mb-1 w-[100px]"
          onClick={() => router.refresh()}
        >
          {" "}
          Next Page{" "}
        </Button>
      </div>
    </div>
  );
}
