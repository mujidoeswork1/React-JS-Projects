import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexClr }) => {
  const b = rgb.join(",");
  // console.log(b);
  const [modal, setModal] = useState(false);

  const handle = () => {
    setModal(true);
    let s = `#${hexClr}`;
    navigator.clipboard.writeText(s);
  };

  useEffect(() => {
    let a = setInterval(() => {
      setModal(false);
    }, 3000);
    return () => {
      clearInterval(a);
    };
  }, [modal]);

  return (
    <>
      <div
        className="box"
        onClick={handle}
        style={{
          backgroundColor: `rgb(${b})`,
          color: index < 10 ? "black" : "white",
        }}
      >
        <h5>{weight}%</h5>
        <h5>#{hexClr}</h5>
        {modal && <p>COPIED TO CLIPBOARD</p>}
      </div>
    </>
  );
};

export default SingleColor;
