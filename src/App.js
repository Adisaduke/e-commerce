import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/ui/Layout";
import Homepage from "./component/ui/Homepage";
import Productdetails from "./component/ProductDetails";
import Cart from "./component/Cart";

function App() {
  return (
    // <div>
    //   <Layout>
    //     <Router>
    //       <Routes>
    //         <Route exact path="/" element={<Homepage />} />
    //         <Route path="/product/:id" element={<Productdetails />} />
    //       </Routes>
    //     </Router>
    //   </Layout>
    // </div>

    <div>
      <Cart />
    </div>
  );
}

export default App;
