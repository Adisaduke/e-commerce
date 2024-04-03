import Allreviews from "./component/Allreviews";
import Category from "./component/Category";
import Customer from "./component/Customer";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Newarrivals from "./component/Newarrivals";
import Productreviews from "./component/Productreviews";
import Topsellings from "./component/Topsellings";
import Comments from "../src/component/Arrays/Comments";
import Layout from "./Layout";

function App() {
  return (
    <div>
      {/* <Layout>
        <Home />
        <Newarrivals />
        <Topsellings />
        <Category />
        <Customer />
      </Layout> */}
      <Productreviews />
    </div>
  );
}

export default App;
