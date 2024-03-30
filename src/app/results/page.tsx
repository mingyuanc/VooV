"use client";

import { useSearchParams } from "next/navigation";
import ResultsPage from "@/features/results/components/ResultsPage";

export default function Results() {
  // const searchParams = useSearchParams();
  // const src = searchParams.get("starting")!;
  // const dest = searchParams.get("ending")!;
  const src = "";
  const dest = "";

  return (
    <div className="max-w-full">
      <ResultsPage src={src} dest={dest} />
    </div>
  );
}
