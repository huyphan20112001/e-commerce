import { useState } from "react";
import "./App.scss";
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
  const [mode, setMode] = useState("light");

  const handleToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className={`wrapper ${mode}`} id="wrapper">
      <div className={`mode ${mode}`}>
        <input id="switch" type="checkbox" />
        <label htmlFor="switch" onClick={handleToggle}>
          <div className="ball"></div>
        </label>
      </div>
      <div className="container">
        <Header mode={mode} />
        <Feature mode={mode} />
      </div>
      <div className="container-fluid">
        <Products mode={mode} />
      </div>
      <Services />
      <Reason mode={mode} />
      <Projects />
      <ListServices mode={mode} />
      <Media />
      <Footer mode={mode} />
    </div>
  );
}

export default App;
