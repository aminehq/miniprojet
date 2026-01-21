import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
