import React from "react";
import Category from "./component/Category";
import Customer from "./component/Customer";
import Home from "./component/Home";
import Newarrivals from "./component/Newarrivals";
import Topsellings from "./component/Topsellings";

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
