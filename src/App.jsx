/* eslint-disable no-unused-vars */
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Place from "./Pages/Place.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Header from "./Components/Header.jsx";
import WalletConnect from "./Components/WalletConnect.jsx";
import Footer from "./Components/Footer.jsx";

import "./styles/App.css";
import { useState, useContext, useEffect } from "react";
import { MetaContext } from "./Contexts/MetaContext.jsx";

const App = () => {
  const { showWalletConnect, setNavIsActive } = useContext(MetaContext);
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);

  // Get screen width on window resize
  useEffect(() => {
    const resizeListener = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  // Close mobile nav when width is above 800px and path changes
  useEffect(() => {
    setNavIsActive(false);
  }, [width > 800]);

  useEffect(() => {
    setNavIsActive(false);

    // move view back to top
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="place" element={<Place />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {showWalletConnect && <WalletConnect />}

      <Footer />
    </div>
  );
};

export default App;
