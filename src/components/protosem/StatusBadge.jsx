// src/components/protosem/StatusBadge.jsx
import React from "react";

const statusStyles = {
  Completed:
"bg-gradient-to-r from-blue-500/15 to-purple-500/15 border-blue-400/30 text-blue-300",
  "In Progress":
    "bg-gradient-to-r from-emerald-500/15 to-emerald-400/10 border-emerald-400/30 text-emerald-300",
  Blocked:
    "bg-gradient-to-r from-rose-500/15 to-rose-400/10 border-rose-400/30 text-rose-300",
};

const StatusBadge = ({ status }) => {
  const style = statusStyles[status] || statusStyles["Completed"];
  const isActive = status === "In Progress";

  return (
    <span
      className={`flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border shrink-0 ${style}`}
    >
      {isActive && (
        <span className="relative flex w-1.5 h-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-emerald-400" />
        </span>
      )}
      {status}
    </span>
  );
};

export default StatusBadge;