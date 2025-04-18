"use client";

import { useState } from 'react';

export function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => onSearch(query);

  return (
    <div className="px-4 py-2">
      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Buscar por barracas de feira ou peixarias..."
          className="w-150 p-3 rounded-lg text-indigo-950 border border-gray-500 focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="cursor-pointer bg-indigo-950 text-white px-4 py-2 rounded-lg hover:bg-indigo-900 transition duration-200"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
