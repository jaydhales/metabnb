import { createContext, useState, useEffect } from "react";
import img0 from "../assets/places/img-0.png";
import img1 from "../assets/places/img-1.png";
import img2 from "../assets/places/img-2.png";
import img3 from "../assets/places/img-3.png";
import img4 from "../assets/places/img-4.png";
import img5 from "../assets/places/img-5.png";
import img6 from "../assets/places/img-6.png";
import img7 from "../assets/places/img-7.png";
import img8 from "../assets/places/img-8.png";
import img9 from "../assets/places/img-9.png";
import img10 from "../assets/places/img-10.png";
import img11 from "../assets/places/img-11.png";
import img12 from "../assets/places/img-12.png";
import img13 from "../assets/places/img-13.png";
import img14 from "../assets/places/img-14.png";
import img15 from "../assets/places/img-15.png";

const MetaContext = createContext();

const MetaContextProvider = ({ children }) => {
  const [showWalletConnect, setShowWalletConnect] = useState(false);
  const [navIsActive, setNavIsActive] = useState(false);

  const [placeData, setPlaceData] = useState([
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ]);

  return (
    <MetaContext.Provider
      value={{
        showWalletConnect,
        setShowWalletConnect,
        placeData,
        navIsActive,
        setNavIsActive,
      }}
    >
      {children}
    </MetaContext.Provider>
  );
};

export { MetaContext, MetaContextProvider };
