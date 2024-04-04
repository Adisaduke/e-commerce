import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;