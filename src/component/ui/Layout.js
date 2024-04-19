import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Layout({ children, cartItems, isLoggedIn, setIsLoggedIn }) {
  return (
    <div>
      <Header
        cartItems={cartItems}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
