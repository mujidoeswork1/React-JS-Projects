import React from "react";

const Menu = ({ title, price, desc, img, id }) => {
  // console.log(title);
  return (
    <>
      <div className="menu-box">
        <div className="img">
          <img src={img} alt="loading..." />
        </div>
        <div className="menu-right-side">
          <div className="upperline-right">
            <h4 className="n">{title}</h4>
            <h4 className="p">${price}</h4>
          </div>
          <div className="low-right">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
