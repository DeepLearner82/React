import { useContext } from "react";
import { UserContext } from "../../Context/MyContext";

function Navbar() {
  const user = useContext(UserContext);
  return <p>Welcome, {user.name}!</p>;
}

export default Navbar;
