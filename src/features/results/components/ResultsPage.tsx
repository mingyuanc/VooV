import { useState } from "react";
import Results from "./Results";
import ResultsHeader from "./ResultsHeader";

interface ResultsPageProps {
  src: string;
  dest: string;
}

function getAllDatesUntilEndOfMonth() {
  const today = new Date();
  const lastDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();
  const dayAbbreviations = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const datesList = ["Today"];
  for (let i = 1; i <= lastDayOfMonth; i++) {
    const date = new Date(today.getFullYear(), today.getMonth(), i);
    datesList.push(`${dayAbbreviations[date.getDay()]} ${date.getDate()}`);
  }

  return datesList;
}

export default function ResultsPage({ src, dest }: ResultsPageProps) {
  const [activeTab, setActiveTab] = useState(0);
  const dates = getAllDatesUntilEndOfMonth();

  const onTabClick = (_: Event, index: number) => {
    setTimeout(() => {
      document.getElementById("qn" + index)?.scrollIntoView({
        block: "start",
        inline: "nearest",
      });
    }, 0);
  };

  return (
    <div className="min-h-fit flex flex-col items-center">
      <ResultsHeader
        src={src}
        dest={dest}
        dates={dates}
        activeTab={activeTab}
        onTabClick={onTabClick}
      />
      <div className="max-w-screen-lg w-full">
        <Results
          src={src}
          dest={dest}
          dates={dates}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
}
