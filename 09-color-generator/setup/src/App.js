import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [error, setError] = useState(false); // just to make input border red
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#616161").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setList(new Values(color).all(10));
      setError(false);
      console.log(list);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <div className="top">
        <h2>Color Generator</h2>
        <form onSubmit={handleSubmit}>
          <input
            className={error ? "error" : null}
            type="text"
            placeholder="#616161"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button className="btn">Submit</button>
        </form>
      </div>
      <div className="boxes">
        {list.map((color, index) => {
          return (
            <>
              <SingleColor
                key={index}
                {...color}
                hexClr={color.hex}
                index={index}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
