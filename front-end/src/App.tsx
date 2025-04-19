// File: src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Cart from "./pages/Cart";
import OrderHistory from "./pages/OrderHistory";

// ✅ Simple token check
const isLoggedIn = (): boolean => {
  return !!localStorage.getItem("token");
};

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />

        {/* 🔐 Protected Routes */}
        <Route
          path="/cart"
          element={isLoggedIn() ? <Cart /> : <Navigate to="/user" replace />}
        />
        <Route
          path="/orders"
          element={
            isLoggedIn() ? <OrderHistory /> : <Navigate to="/user" replace />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
