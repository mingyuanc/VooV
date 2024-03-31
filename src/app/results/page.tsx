"use client";

import { useSearchParams } from "next/navigation";
import ResultsPage from "@/features/results/components/ResultsPage";

export default function Results() {
  const searchParams = useSearchParams();
  const src = searchParams.get("starting")!;
  const dest = searchParams.get("ending")!;

  return (
    <div
      className="max-w-full max-h-screen h-screen overflow-hidden"
      // style={{
      //   height: "-webkit-fill-available",
      //   maxHeight: "-webkit-fill-available",
      // }}
    >
      <ResultsPage src={src} dest={dest} />
    </div>
  );
}
