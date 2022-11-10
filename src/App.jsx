import { useContext } from "react";
import { MetaContext } from "./Contexts/MetaContext";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Place from "./Pages/Place.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="place" element={<Place />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
