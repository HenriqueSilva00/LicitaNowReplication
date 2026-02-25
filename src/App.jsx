import Navbar from "./components/Navbar";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import Newsletter from "./components/Newsletter";
import CookiePreferences from "./components/CookiePreferences";
import BackToTop from "./components/BackToTop";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <Newsletter />
      <Footer />

      <CookiePreferences />
      <BackToTop />
    </div>
  );
}

export default App;
