import React, { useState } from "react";
import logo from "./images/logo.svg";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

function App() {
  const d = useGlobalContext();
  // console.log(d);
  return (
    <>
      <Navbar />
      <Submenu />
      {/* <div className="nav">
        <img src={logo} alt="Loading..." />

        <div className="allProducts ">
          <div className="products mx-3">Products</div>
          <div className="products mx-3">Developers</div>
          <div className="products mx-3">Company</div>
        </div>
        <div className="btn-cont">
          <button className="btn">Sign in</button>
        </div>
      </div> */}
      <div className="lower">
        <aside className="left">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
        </aside>
        {/* <div></div> */}
        <div className="img-container">
          <img src={phoneImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
