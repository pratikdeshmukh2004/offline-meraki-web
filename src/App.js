import React, { useEffect, useState } from "react";

import "./styles/style.css";
import axios from "axios";

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://pratikdeshmukh2004.github.io/offline-meraki-web/data/pathways.json`
      )
      .then((response) => {
        console.log(response);
        setCourses(response?.data?.pathways);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h4 style={{textAlign: 'center'}}>Courses</h4>
      <div className="grid">
        {courses.map((c) => (
          <div className="box" key={c.id}>
            <img width={50} height={50} src={c.logo}/>
            <h4>{c.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
};
export default App;
