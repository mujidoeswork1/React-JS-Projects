import React, { useState } from "react";
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const rightBtn = () => {
    // console.log("first");
    var i = index + 1;
    if (i > data.length - 1) {
      i = 0;
    }
    setIndex(i);
  };
  const leftBtn = () => {
    var i = index - 1;
    if (i < 0) {
      i = data.length - 1;
    }
    setIndex(i);
  };

  const surprise = () => {
    var i = rand(0, data.length - 1);
    // console.log(i);

    // if (index === i) {
    // setIndex(index + 1);
    // } else {
    setIndex(i);
    // }
  };

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const { name, job, image, text } = data[index];
  return (
    <main>
      <div className="container">
        <div className="img-container">
          <img src={image} alt="noChaceBro" className="img rounded-corners" />
          <FaQuoteRight className="quote" />
        </div>
        <h2 className="name">{name}</h2>
        <h5 className="job">{job}</h5>
        <p className="desc">{text}</p>
        <div className="btn-container">
          <button className="b1" onClick={leftBtn}>
            <FaChevronLeft className="f1" />
          </button>
          <button className="b2" onClick={rightBtn}>
            <FaChevronRight className="f2" />
          </button>
        </div>
        <div className="btn">
          <button className="b3" onClick={surprise}>
            Surprise me
          </button>
        </div>
      </div>
    </main>
  );
};

export default Review;
