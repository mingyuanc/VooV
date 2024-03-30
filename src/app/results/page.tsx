"use client";

import { useSearchParams } from "next/navigation";
import ResultsPage from "@/features/results/components/ResultsPage";
import { Suspense } from "react";

export default function Results() {
  const searchParams = useSearchParams();
  const src = searchParams.get("starting")!;
  const dest = searchParams.get("ending")!;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="max-w-full">
        <ResultsPage src={src} dest={dest} />
      </div>
    </Suspense>
  );
}
