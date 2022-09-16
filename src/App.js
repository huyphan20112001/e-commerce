import Banner from "./layouts/components/Banner/Banner";
import Header from "./layouts/components/Header/Header";
function App() {
  return (
    <div className="wrapper" id="wrapper">
      <Header />
      <div className="container">
        <Banner />
      </div>
    </div>
  );
}

export default App;
