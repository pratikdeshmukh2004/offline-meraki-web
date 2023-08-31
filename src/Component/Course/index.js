import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function CourseCard({ course }) {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
    </Box>
  );

  const cardStyle = {
    width: "250px",    // Set the width of the card
    height: "200px",   // Set the height of the card
  };

  const imgStyle = {
    width: "100%",      // Make the image occupy the full width of the card
    height: "100%",     // Make the image occupy the full height of the card
    objectFit: "cover", // Maintain aspect ratio and cover the whole space
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="h6" component="div">
          <img
            src={course.logo}
            alt={course.name}
            style={imgStyle} // Apply the image dimensions
          />
        </Typography>
        <Typography variant="h6" component="div">
          {bull}
          {course.name}
        </Typography>
      </CardContent>
    </Card>
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
      <Grid container spacing={2}>
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
