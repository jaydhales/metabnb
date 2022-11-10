import { createContext, useEffect, useState } from "react";

const MetaContext = createContext();

const MetaContextProvider = ({ children }) => {
  const [test, setTest] = useState("testing 1,2,3");
  return (
    <MetaContext.Provider
      value={{
        test,
      }}
    >
      {children}
    </MetaContext.Provider>
  );
};

export { MetaContext, MetaContextProvider };
