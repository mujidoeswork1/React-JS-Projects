import React, { useContext } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { AppContext } from "./context";
function App() {
  const d = useContext(AppContext);
  const { isModalOpen } = d;
  console.log(d);
  return (
    <>
      <body className={isModalOpen && "body-background"}>
        <Home />
        <Modal />
        <Sidebar />
      </body>
    </>
  );
}

export default App;
