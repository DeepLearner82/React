// PostError.jsx
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PostError() {
  const error = useRouteError();

  // React Router will pass the Response or Error object here
  return (
    <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>
      <h1>⚠️ Oops! Something went wrong</h1>

      {/* If it's a Response object (loader threw Response) */}
      {error.status && (
        <>
          <h2>Error {error.status}</h2>
          <p>{error.statusText || "Unexpected error"}</p>
        </>
      )}

      {/* If it's a plain Error object */}
      {error.message && <p>{error.message}</p>}

      {/* ✅ SPA Navigation */}
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        🔙 Back to Posts
      </Link>
    </div>
  );
}
