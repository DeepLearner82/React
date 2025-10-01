import { useSearchParams } from "react-router";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div>
      <h2>Search Results</h2>
      {query ? (
        <p>You searched for: {query}</p>
      ) : (
        <p>No search term provided.</p>
      )}
    </div>
  );
}
