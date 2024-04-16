import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/ui/Layout";
import Homepage from "./component/ui/Homepage";
import Productdetails from "./component/ProductDetails";
import Cart from "./component/Cart";

function App() {
  // Initialize cart items with the items stored in local storage, if any
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log("Item added to cart:", item);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
  };

  // Save cart items to local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]); // Triggered whenever cartItems change

  return (
    <Router>
      <Layout cartItems={cartItems}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
          <Route
            path="/product/:id"
            element={<Productdetails addToCart={addToCart} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
