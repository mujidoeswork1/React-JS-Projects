import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";
const Home = () => {
  const {
    isModalOpen,
    isSidebarOpen,
    openModal,
    closeModal,
    openSidebar,
    closeSidebar,
  } = useContext(AppContext);
  return (
    <>
      <div className="btn-bars">
        <button className="btn-bars" disabled={true}>
          <FaBars
            className="inner-btn"
            onClick={isModalOpen ? null : openSidebar}
          />
        </button>
      </div>
      <div className="show-btn" onClick={openModal}>
        <button className="button">Show Modal</button>
      </div>
    </>
  );
};

export default Home;
