// App.jsx
import { useState } from "react";

import SearchIcon from "./assets/search.svg";
import MovieCard from "./components/movieCard";

import { searchMovie } from "./api";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);

  const search = async () => {
    try {
      if (searchTerm.length > 3) {
        const result = await searchMovie(searchTerm);
        setSearchResult(result);
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <main className="relative w-screen bg-black flex flex-col items-center gap-5">
      <h1 className="text-4xl lg:text-5xl font-bold text-primary mt-10 overflow-y-hidden">
        Movie Buffs Corner
      </h1>
      <div className="mt-7 mb-7 relative">
        <img
          src={SearchIcon}
          alt="Search Icon"
          className="absolute py-3 px-4"
        />
        <input
          type="text"
          className="w-500px lg:w-[700px] h-14 rounded-full pl-14 pr-40 text-xl font-mono"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="text-black absolute right-0 bg-primary px-7 w-36 h-14 rounded-full font-semibold text-lg hover:bg-[#B4B522]"
          onClick={search}
        >
          Search
        </button>
      </div>
      {error && <div>Error: {error.message}</div>}
      {searchResult.length === 0 && <div>No results found</div>}
      <MovieCard movies={searchResult} />
    </main>
  );
};

export default App;
