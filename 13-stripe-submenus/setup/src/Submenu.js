import React, { useState, useRef, useEffect } from "react";

const Submenu = () => {
  const container = useRef(null);
  useEffect(() => {
    container.current.style.top = `100px`;
    console.log(container.current.style);
  }, [container]);
  return (
    <>
      <h2 className="submenu-border" ref={container}>
        submenu component
      </h2>
    </>
  );
};

export default Submenu;
