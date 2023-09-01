import React, { useEffect, useState } from "react";

import "./styles/style.css";
import axios from "axios";

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://pratikdeshmukh2004.github.io/offline-meraki-web/data/courses.json`
      )
      .then((response) => {
        console.log(response);
        setCourses(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h4>Courses</h4>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </>
  );
};
export default App;
