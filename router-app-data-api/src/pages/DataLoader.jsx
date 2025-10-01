import { useLoaderData } from "react-router";

export default function DataLoader() {
  const users = useLoaderData(); // ✅ data comes from loader

  return (
    <div>
      <h2>User List (Loader Demo)</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
