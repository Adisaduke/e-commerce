import React from "react";
import Category from "../Category";
import Customer from "../Customer";
import Home from "../Home";
import Newarrivals from "../Newarrivals";
import Topsellings from "../Topsellings";

function Homepage() {
  return (
    <div>
      <Home />
      <Newarrivals />
      <Topsellings />
      <Category />
      <Customer />
    </div>
  );
}

export default Homepage;
