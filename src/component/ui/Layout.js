import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Layout({
  children,
  cartItems,
  isLoggedIn,
  onSearchHandler,
  setIsLoggedIn,
  setFilteredProducts,
}) {
  return (
    <div>
      <Header
        cartItems={cartItems}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        onSearchHandler={onSearchHandler}
        setFilteredProducts={setFilteredProducts}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
