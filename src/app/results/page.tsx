"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ResultsPage from "@/features/results/components/ResultsPage";

export default function Results() {
  const searchParams = useSearchParams();
  const src = searchParams.get("starting")!;
  const dest = searchParams.get("ending")!;

  return (
    <div>
      <ResultsPage src={src} dest={dest} />
    </div>
  );
}
