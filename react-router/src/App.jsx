import "./App.css";

// ---------------------------- SPA without React Router ----------------------------
// import { useState } from "react";

// import Home from "./pages/Home";
// import About from "./pages/About";

// function App() {
//   const [page, setPage] = useState("home");

//   return (
//     <div>
//       <nav>
//         <button onClick={() => setPage("home")}>Home</button>
//         <button onClick={() => setPage("about")}>About</button>
//       </nav>

//       {page === "home" && <Home />}
//       {page === "about" && <About />}
//     </div>
//   );
// }

// export default App;

// ---------------------------- SPA with React Router ----------------------------

// import { Routes, Route, Link } from "react-router";

// import Home from "./pages/Home";
// import About from "./pages/About";

// function App() {
//   return (
//     <>
//       <nav>
//         <Link to="/">Home</Link> |<Link to="/about">About</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// ---------------------------- SPA with React Router and NavLink----------------------------

import { Routes, Route, NavLink } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          About
        </NavLink>
        |{" "}
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Users
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />

        {/* <Route path="/users" element={<Users />}>
          <Route path=":id" element={<UserDetail />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
