import { NavLink, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import SearchResults from "./pages/SearchResults";
import Search from "./pages/Search";
import About from "./pages/About";
import DataLoader from "./pages/DataLoader";
import "./App.css";

function App() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/products">Products</NavLink> |{" "}
        <NavLink to="/about">About</NavLink> |{" "}
        <NavLink to="/search">Search</NavLink> |{" "}
        <NavLink to="/dataloader">Data Loading Demo</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />}>
          {/* nested route */}
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="search" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path="searchresults" element={<SearchResults />} />
        <Route path="dataloader" element={<DataLoader />} />
      </Routes>
    </div>
  );
}
export default App;
