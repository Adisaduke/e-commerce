import Category from "./component/Category";
import Customer from "./component/Customer";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Newarrivals from "./component/Newarrivals";
import Topsellings from "./component/Topsellings";


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Newarrivals />
      <Topsellings />
      <Category />
      <Customer />
      <Footer />
    </div>
  );
}

export default App;
