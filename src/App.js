import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import Productreviews from "./component/Productreviews";

function App() {
  return (
    <div>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product" element={<Productreviews />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
