import React, { useState, useMemo } from "react";
import { type Unit } from "../types";
import LessonItem from "./LessonItem";
import { FiChevronDown } from "react-icons/fi";

const ProgressBar: React.FC<{ value: number }> = ({ value }) => (
  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
    <div
      className="bg-teal-500 dark:bg-teal-400 h-2.5 rounded-full transition-all duration-500"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

const UnitAccordion: React.FC<{ unit: Unit }> = ({ unit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const progress = useMemo(() => {
    const completed = unit.lessons.filter((l) => l.completed).length;
    return unit.lessons.length > 0
      ? (completed / unit.lessons.length) * 100
      : 0;
  }, [unit.lessons]);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 mt-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2.5 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center text-right gap-2 sm:gap-4"
      >
        <div className="flex-1 w-full sm:w-auto">
          <h2 className="text-sm sm:text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight">
            {unit.title}
          </h2>
        </div>

        <div className="w-full sm:w-1/3 flex items-center gap-2 sm:gap-4">
          <div className="flex-1">
            <ProgressBar value={progress} className="h-1.5 sm:h-2" />
          </div>

          <FiChevronDown
            className={`text-slate-500 dark:text-slate-400 transform transition-transform duration-300 flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            size={18}
          />
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/20">
          {unit.lessons.map((lesson) => (
            <div key={lesson.id} className="text-sm">
              <LessonItem lesson={lesson} unitId={unit.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnitAccordion;
