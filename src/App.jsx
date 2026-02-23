import Navbar from "./components/Navbar";
import FirtsPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import Newsletter from "./components/Newsletter";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <FirtsPage />
      <SecondPage />
      <ThirdPage />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
