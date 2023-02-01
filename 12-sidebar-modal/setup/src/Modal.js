import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "./context";

const Modal = () => {
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
      <div className={isModalOpen ? "Modal show-modal" : "Modal"}>
        <div className="cross-Modal">
          <FaTimes onClick={closeModal} />
        </div>
        <div className="Modal-txt">Modal Content</div>
      </div>
    </>
  );
};

export default Modal;
