"use client";

import { Search } from "lucide-react";
import { useState } from "react";

interface Props {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative -mt-10 px-4 sm:px-6 lg:px-8 border-b bg-white pt-6 pb-4">
      <div className="w-full rounded-2xl bg-white p-4 border border-neutral-200 shadow-sm transition focus-within:ring-2 focus-within:ring-neutral-300">
        <div className="flex items-center gap-3">
          <Search className="text-neutral-400 shrink-0" />
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              onSearch(e.target.value);
            }}
            placeholder="Cari produk ..."
            className="w-full bg-transparent outline-none text-sm sm:text-base placeholder:text-neutral-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
