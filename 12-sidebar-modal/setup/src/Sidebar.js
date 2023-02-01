import React, { useContext } from "react";
import logo from "./logo.svg";
import { FaBed, FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { AppContext } from "./context";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";

const Sidebar = () => {
  const {
    isModalOpen,
    isSidebarOpen,
    openModal,
    closeModal,
    openSidebar,
    closeSidebar,
  } = useContext(AppContext);
  return (
    <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="upper">
        <div className="img-cross-bar">
          <img src={logo} alt="loading img..." />
          <FaTimes className="cross-icon" onClick={closeSidebar} />
        </div>
        <div className="all-links">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <>
                <span key={id}>
                  <div className="links" key={id}>
                    {/* < className="Inner-link" /> */}
                    <span className="Inner-link">{icon}</span>
                    <p>{text}</p>
                  </div>
                </span>
              </>
            );
          })}
        </div>
      </div>

      <div className="lower">
        <div className="p-icons">
          {social.map((ssocial) => {
            const { id, url, icon } = ssocial;
            return (
              <>
                <span className="icon-f">{icon}</span>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
