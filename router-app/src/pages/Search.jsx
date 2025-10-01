import { useState } from "react";
import { useNavigate } from "react-router";

export default function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/searchresults?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div>
      <h2>Search Page</h2>
      <p>Use the search box to find products.</p>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
