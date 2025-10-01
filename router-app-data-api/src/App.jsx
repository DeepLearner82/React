import { Outlet, NavLink } from "react-router";
import "./App.css";

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/products">Products</NavLink> |{" "}
        <NavLink to="/about">About</NavLink> |{" "}
        <NavLink to="/search">Search</NavLink> |{" "}
        <NavLink to="/users">Data Loading Demo</NavLink>
      </nav>
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
}
