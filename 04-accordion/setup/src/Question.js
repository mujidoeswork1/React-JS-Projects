import React, { useState } from "react";
import people from "./data";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="quest">
        <div className="up">
          <p>{props.title}</p>
          <div className="icon" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? (
              <AiOutlineMinus className="qo" />
            ) : (
              <AiOutlinePlus className="qo" />
            )}
          </div>
        </div>
        {showInfo && (
          <div className="down">
            <p className="hidden-sm">{props.info}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Question;
