import { createContext, useState, useEffect } from "react";


const MetaContext = createContext();

const MetaContextProvider = ({ children }) => {
  const [showWalletConnect, setShowWalletConnect] = useState(false);
  const [navIsActive, setNavIsActive] = useState(false);

  const [placeData, setPlaceData] = useState([]);
  

  useEffect(() => {
    const data = [];
    for (let i = 0; i < 16; i++) {
      data.push(`/src/assets/places/img-${i}.png`);
    }

    setPlaceData(data);
  }, []);

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
