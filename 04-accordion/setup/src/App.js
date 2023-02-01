import React, { useState } from "react";
import people from "./data";
import Question from "./Question";
function App() {
  return (
    <>
      <main>
        <div className="container">
          <div className="cont-inner">
            <div className="left-section">
              <section>Questions & Answers about Login</section>
            </div>
            <div className="right-section">
              <div className="quest-main">
                {people.map((person) => {
                  return (
                    <Question
                      title={person.title}
                      info={person.info}
                      id={person.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
