import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stat from "./components/Stat";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Stat />
      <Footer />
    </div>
  );
};

export default App;
