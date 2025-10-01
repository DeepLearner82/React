import { useContext } from "react";
import { UserContext } from "../../Context/MyContext";

function Dashboard() {
  const user = useContext(UserContext);
  return <p>Role: {user.role}</p>;
}
export default Dashboard;
