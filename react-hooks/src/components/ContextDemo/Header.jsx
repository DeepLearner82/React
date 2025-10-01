import { useContext } from "react";
import { ThemeContext } from "../../Context/MyContext";

function Header() {
  const theme = useContext(ThemeContext);
  return (
    <h1 style={{ color: theme === "light" ? "black" : "blue" }}>Header</h1>
  );
}
export default Header;
