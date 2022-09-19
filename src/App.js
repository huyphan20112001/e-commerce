import Banner from "./layouts/components/Banner/Banner";
import Feature from "./layouts/components/Feature/Feature";
import Footer from "./layouts/components/Footer/Footer";
import Header from "./layouts/components/Header/Header";
import ListServices from "./layouts/components/ListServices/ListServices";
import Media from "./layouts/components/Media/Media";
import Products from "./layouts/components/Products/Products";
import Projects from "./layouts/components/Projects/Projects";
import Reason from "./layouts/components/Reason/Reason";
import Services from "./layouts/components/Services/Services";
function App() {
  return (
    <div className="wrapper" id="wrapper">
      <div className="container">
        <Header />
        <Feature />
      </div>
      <div className="container-fluid">
        <Products />
      </div>
      <Services />
      <Reason />
      <Projects />
      <ListServices />
      <Media />
      <Footer />
    </div>
  );
}

export default App;
