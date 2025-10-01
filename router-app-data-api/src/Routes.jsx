import App from "./App.jsx";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Search from "./pages/Search";
import SearchResults from "./pages/SearchResults";
import DataLoader from "./pages/DataLoader";
import { createBrowserRouter } from "react-router";
import { usersLoader } from "./loaders/usersLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // default route
      {
        path: "products",
        element: <Products />,
        children: [
          { path: ":id", element: <ProductDetail /> }, // dynamic route
        ],
      },
      { path: "about", element: <About /> },
      { path: "search", element: <Search /> },
      { path: "searchresults", element: <SearchResults /> },
      { path: "users", element: <DataLoader />, loader: usersLoader },
    ],
  },
]);

export default router;
