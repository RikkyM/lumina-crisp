import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import OrderPage from "./pages/order";
import Navbar from "./components/Elements/Navbar";
import { CartProvider } from "./hooks/CartContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/keranjang" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;