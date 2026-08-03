// src/components/protosem/JournalTimeline.jsx
import React from "react";
import WeekCard from "./WeekCard.jsx";

const JournalTimeline = ({ entries = [] }) => {
  const sorted = [...entries].sort((a, b) => b.week - a.week);

  if (!sorted.length) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-sm">No journal entries yet.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {sorted.map((entry, i) => (
        <WeekCard key={entry.week} entry={entry} delay={i * 0.06} />
      ))}
    </div>
  );
};

export default JournalTimeline;