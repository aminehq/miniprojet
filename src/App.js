import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Default from "./layouts/Default";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route index element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
