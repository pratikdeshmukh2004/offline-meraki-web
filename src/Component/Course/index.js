import React, { useState, useEffect } from "react";

function Course() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://merd-api.merakilearn.org/pathways/1';

    // Define the headers
    const headers = {
      "version-code": 67
    };

    // Fetch data from the API with custom headers
    fetch(apiUrl, {
      method: "GET",
      headers: headers
    })
      .then(response => response.json())
      .then(data => {
        setData(data); // Update the state with fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    // Cleanup function (optional)
    return () => {
      console.log('Component will unmount');
      // Perform any cleanup operations here
    };
  }, []);

  return (
    <div>
      <h1>Pathways</h1>
      <div className="course-cards">
        {data.courses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.logo} alt={course.name} />
            <h2>{course.name}</h2>
            <p>{course.short_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
