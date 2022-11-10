import { createContext, useEffect, useState } from "react";

const MetaContext = createContext();

const MetaContextProvider = ({ children }) => {
  return <MetaContext.Provider value={{}}>{children}</MetaContext.Provider>;
};

export { MetaContext, MetaContextProvider };
