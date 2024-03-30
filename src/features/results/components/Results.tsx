import { MutableRefObject, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ResultEntry from "./ResultEntry";

interface resultsProps {
  src: string;
  dest: string;
  dates: {
    date: string;
    ref: MutableRefObject<HTMLDivElement | null>;
  }[];
  setActiveTab: (x: number) => void;
}

export default function Results({
  src,
  dest,
  dates,
  setActiveTab,
}: resultsProps) {
  const IntersectHook = (index: number, inView: boolean): void => {
    useEffect(() => {
      if (inView) {
        setActiveTab(index);
      }
    }, [inView, index]);
  };

  return (
    <div>
      {dates.map((date, index) => (
        <ResultDay
          key={date.date}
          src={src}
          dest={dest}
          date={date}
          index={index}
          intersectHook={IntersectHook}
        />
      ))}
    </div>
  );
}

interface ResultDayProps {
  src: string;
  dest: string;
  date: {
    date: string;
    ref: MutableRefObject<HTMLDivElement | null>;
  };
  index: number;
  intersectHook: (index: number, inView: boolean) => void;
}

function ResultDay({ src, dest, date, index, intersectHook }: ResultDayProps) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  intersectHook(index, inView);
  const timeArray = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "17:00",
    "17:30",
    "18:30",
    "19:00",
    "19:30",
  ];
  return (
    <div ref={date.ref} className="pb-8 pt-4">
      <div ref={ref}>
        <h1 className="pl-4 font-bold text-3xl">{date.date}</h1>
        {timeArray.map((time) => (
          <ResultEntry
            key={time}
            time={time}
            src={time > "11:00" ? dest : src}
            dest={time > "11:00" ? src : dest}
          />
        ))}
      </div>
    </div>
  );
}
