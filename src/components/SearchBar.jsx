import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-end mt-2 mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="p-2 border border-black rounded-[20px] w-1/8"
      />
      <button
        type="submit"
        className="p-2 ml-2 mr-2 tracking-wider text-white border border-black bg-[#6195e9] rounded-[20px]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
