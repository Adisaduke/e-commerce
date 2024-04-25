import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/ui/Layout";
import Homepage from "./component/ui/Homepage";
import Productdetails from "./component/ProductDetails";
import Cart from "./component/Cart";
import Login from "./component/ui/Login";
import LoginRequiredPage from "./component/ui/LoginRequiredPage";
import Checkout from "./component/Checkout";
import OrderSummary from "./component/Ordersummary";
import Shop from "./component/Shop";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [warning, setWarning] = useState(false);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route
          path="/ordersummary"
          element={<OrderSummary cartItems={cartItems} />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/*"
          element={
            <Layout
              cartItems={cartItems}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            >
              <Routes>
                <Route path="/shop" element={<Shop />} />
                <Route index element={<Homepage />} />
                <Route
                  path="/cart"
                  element={
                    isLoggedIn ? (
                      <Cart
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        removeFromCart={removeFromCart}
                      />
                    ) : (
                      <LoginRequiredPage />
                    )
                  }
                />
                <Route
                  path="/product/:id"
                  element={
                    <Productdetails warning={warning} addToCart={addToCart} />
                  }
                />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
