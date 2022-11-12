import { createContext, useState } from "react";

const MetaContext = createContext();

const MetaContextProvider = ({ children }) => {
  const [showWalletConnect, setShowWalletConnect] = useState(false);
  return (
    <MetaContext.Provider
      value={{
        showWalletConnect,
        setShowWalletConnect,
      }}
    >
      {children}
    </MetaContext.Provider>
  );
};

export { MetaContext, MetaContextProvider };
