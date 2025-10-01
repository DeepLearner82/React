import { useSearchParams } from "react-router";
import { useLoaderData } from "react-router";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const users = useLoaderData();
  console.log("Loaded users:", users); // just to demonstrate loader data is available
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
