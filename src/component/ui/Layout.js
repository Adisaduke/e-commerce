import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Layout({ children, cartItems, isLoggedIn }) {
  return (
    <div>
      <Header cartItems={cartItems} isLoggedIn={isLoggedIn} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
