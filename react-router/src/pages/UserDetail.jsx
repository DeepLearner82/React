import { useParams, useNavigate, Navigate } from "react-router";

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

export default function UserDetail() {
  const { id } = useParams(); // get URL param
  const navigate = useNavigate(); // programmatic navigation
  const user = users.find((u) => u.id === Number(id));

  // console.log("UserDetail: id =", id, "user =", user);

  if (!user) {
    // console.log("UserDetail: User not found, redirecting to /users");
    // If user not found → redirect using <Navigate>
    return <Navigate to="/users" replace />;
  }

  return (
    <div>
      <h2>User Detail</h2>
      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>

      <button onClick={() => navigate("/users")}>⬅ Back to Users</button>
    </div>
  );
}
