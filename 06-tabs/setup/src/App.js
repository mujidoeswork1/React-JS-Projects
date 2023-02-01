import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight, FaAngleDoubleDown } from "react-icons/fa";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setJobs(() => {
      return users;
    });
    setLoading(false);
    // await console.log(jobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  {
    if (loading) {
      return (
        <div className="nav">
          <h2>Loading...</h2>
          <div className="border-line"></div>
        </div>
      );
    }
  }

  const { company, dates, duties, title } = jobs[value];
  // console.log(jobs);
  return (
    <>
      <div className="nav">
        <h2>Experience</h2>
        <div className="border-line"></div>
      </div>

      <div className="down">
        <div className="down-left">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                className={`button ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
              >
                {job.company}{" "}
              </button>
            );
          })}
        </div>
        <div className="down-right">
          <h3 className="com stack">{title}</h3>
          <h4 className="com name">{company}</h4>
          <p className="date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="desc" key={index}>
                <FaAngleDoubleRight className="icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="end-button">
        <button>more info</button>
      </div>
    </>
  );
}

export default App;
