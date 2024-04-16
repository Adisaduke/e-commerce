import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Layout({ children, cartItems }) {
  return (
    <div>
      <Header cartItems={cartItems} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
