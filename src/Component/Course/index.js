import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../../App.css"

function CourseCard({ course }) {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
    </Box>
  );

  return (
    <div className="card-container"> {/* Apply the card-container class */}
      <Card>
        <CardContent className="card-content"> {/* Apply the card-content class */}
          <Typography variant="h6" component="div">
            <img
              src={course.logo}
              alt={course.name}
              className="card-image" // Apply the card-image class
            />
          </Typography>
          <Typography variant="h6" component="div">
            {bull}
            {course.name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
function Course() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = `https://merd-api.merakilearn.org/pathways/1`;

    // Define the headers
    const headers = {
      "version-code": 61
    };

    // Fetch data from the API using axios
    axios.get(apiUrl, { headers })
      .then(response => {
        setData(response.data); // Update the state with fetched data
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
      <h1>Courses</h1>
      <Grid container spacing={2} className="grid-container">
        {data.pathway?.courses.map(course => (
          <Grid item xs={6} sm={4} md={3} key={course.id}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Course;
