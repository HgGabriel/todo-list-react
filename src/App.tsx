import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import "./styles/global.css";
import { Tasks } from "./components/Tasks/Tasks";

function App() {
  const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   console.log("Executando função de useEffect");

  //   return () => {
  //     console.log("Executado quando desmontado");
  //   };
  // }, [toggle]);

  return (
    <>
      <Header />
      <Tasks />

      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
    </>
  );
}

export default App;
