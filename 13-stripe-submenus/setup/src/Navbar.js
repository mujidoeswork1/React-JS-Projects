import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} alt="Loading..." />

      <div className="allProducts ">
        <div className="products mx-3">Products</div>
        <div className="products mx-3">Developers</div>
        <div className="products mx-3">Company</div>
      </div>
      <div className="btn-cont">
        <button className="btn">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
