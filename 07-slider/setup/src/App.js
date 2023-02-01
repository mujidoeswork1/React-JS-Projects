import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaChevronLeft, FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > people.length - 1) {
      setValue(0);
    }
    if (value < 0) {
      setValue(people.length - 1);
    }
  }, [value, people]);

  useEffect(() => {
    let s = setInterval(() => {
      setValue(value + 1);
    }, 5000);
    return () => {
      clearInterval(s);
    };
  }, [value]);

  return (
    <>
      <div className="nav">
        <h3>
          <span>/</span> Reviews
        </h3>
      </div>
      <div className="container">
        {people.map((person, index) => {
          const { id, name, image, title, quote } = person;
          let position = "next-slide";

          if (index === value) {
            position = "active-slide";
          }
          if (
            index === value - 1 ||
            (value === 0 && index === people.length - 1)
          ) {
            position = "last-slide";
          }

          return (
            <div className={`inner-container ${position}`} key={id}>
              <div className="img-container">
                <img className="img" src={image} alt="Loading..." />
              </div>
              <h4 className="name">{name}</h4>
              <h4 className="job">{title}</h4>
              <p className="desc">{quote}</p>
              <div className="icon-cotainer">
                <FaQuoteRight className="icon" />
              </div>
            </div>
          );
        })}
        <button
          className="left-btn-container"
          onClick={() => setValue(value - 1)}
        >
          <FiChevronLeft className="left-btn" />
        </button>
        <button
          className="right-btn-container"
          onClick={() => setValue(value + 1)}
        >
          <FiChevronRight className="right-btn" />
        </button>
      </div>
    </>
  );
}

export default App;
