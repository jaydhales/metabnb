import { useContext } from "react";
import { MetaContext } from "./Contexts/MetaContext";

function App() {
  const { test } = useContext(MetaContext);
  return <div className="App">This is {test}</div>;
}

export default App;
