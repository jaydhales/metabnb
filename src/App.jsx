import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Place from "./Pages/Place.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Header from "./Components/Header.jsx";
import WalletConnect from "./Components/WalletConnect.jsx";
import Footer from "./Components/Footer.jsx";

import "./styles/App.css";

function App() {
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

      <WalletConnect />

      <Footer />
    </div>
  );
}

export default App;
