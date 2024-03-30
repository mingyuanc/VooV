import { Tabs, Tab } from "react-tabs-scrollable";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "react-tabs-scrollable/dist/rts.css";
import "./mui-tabs.css";

interface ResultsTabsProps {
  dates: string[];
  activeTab: number;
  onTabClick: (_: Event, index: number) => void;
}

export default function ResultsTabs({
  dates,
  activeTab,
  onTabClick,
}: ResultsTabsProps) {
  return (
    <div className="min-h-fit">
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        leftBtnIcon={<ChevronLeftIcon />}
        rightBtnIcon={<ChevronRightIcon />}
        mode="scrollSelectedToCenterFromView"
      >
        {dates.map((item, index) => (
          <Tab key={item}>
            <span className={`${index === activeTab ? "font-bold" : ""}`}>
              {item}
            </span>
          </Tab>
        ))}
      </Tabs>
      <div className="w-full border-t border-gray-400 bg-transparent relative" />
    </div>
  );
}
