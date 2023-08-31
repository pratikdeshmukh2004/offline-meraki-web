import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [course, setCourses] = useState(null);
  const username = "pratikdeshmukh2004"; // GitHub username

  useEffect(() => {
    axios
      .get(
        `https://navgurukul.github.io/tarabai-shinde/data/meraki_partners.json`
      )
      .then((response) => {
        console.log(response);
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Courses</h1>
      <ul>
        {course ? (
          Object.keys(course).map((c) => (
            <li>
              {course[c].Name}
            </li>
          ))
        ) : (
          <p>Loading courses...</p>
        )}
      </ul>
    </div>
  );
}

export default App;
