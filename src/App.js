import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import Productdetails from "./component/ProductDetails";

function App() {
  return (
    <div>
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<Productdetails />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
