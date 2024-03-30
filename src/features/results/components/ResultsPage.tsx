"use client";

import { useState, useRef, MutableRefObject } from "react";
import Results from "./Results";
import ResultsHeader from "./ResultsHeader";
import { useSwipeable, SwipeEventData } from "react-swipeable";

interface ResultsPageProps {
  src: string;
  dest: string;
}

function getAllDatesUntilEndOfMonth(): {
  date: string;
  ref: MutableRefObject<HTMLDivElement | null>;
}[] {
  const today = new Date();
  const lastDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();
  const dayAbbreviations = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const datesList = [{ date: "Today", ref: useRef(null) }];
  for (let i = 1; i <= lastDayOfMonth; i++) {
    const date = new Date(today.getFullYear(), today.getMonth(), i);
    datesList.push({
      date: `${dayAbbreviations[date.getDay()]} ${date.getDate()}`,
      // eslint-disable-next-line react-hooks/rules-of-hooks
      ref: useRef(null),
    });
  }

  return datesList;
}

export default function ResultsPage({ src, dest }: ResultsPageProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [dates, setDates] = useState(getAllDatesUntilEndOfMonth());

  const onTabClick = (_: Event | undefined, index: number) => {
    setTimeout(() => {
      dates[index].ref.current?.scrollIntoView({
        block: "start",
        inline: "nearest",
      });
    }, 0);
  };

  const handlers = useSwipeable({
    onSwipedLeft: (_: SwipeEventData) => {
      if (activeTab < dates.length - 1) {
        onTabClick(undefined, activeTab + 1);
      }
    },
    onSwipedRight: (_: SwipeEventData) => {
      if (activeTab > 0) {
        onTabClick(undefined, activeTab - 1);
      }
    },
    trackMouse: true,
  });

  return (
    <div className="max-h-screen flex flex-col items-center max-w-full ">
      <div>
        <ResultsHeader
          src={src}
          dest={dest}
          dates={dates}
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
      </div>
      <div {...handlers} className="max-w-screen-lg w-full overflow-y-scroll">
        <Results
          src={src}
          dest={dest}
          dates={dates}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
}
