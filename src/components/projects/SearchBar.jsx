// src/components/projects/SearchBar.jsx
import React from "react";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar = ({ value, onChange, placeholder = "Search projects..." }) => {
  return (
    <div className="relative w-full md:w-80">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 backdrop-blur-xl focus:outline-none focus:border-purple-400/40 focus:bg-white/[0.07] transition-all duration-300"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
          aria-label="Clear search"
        >
          <FiX className="text-sm" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;