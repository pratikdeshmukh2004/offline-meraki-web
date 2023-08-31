import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
  );
  return (
    <div>
      <h1>Courses</h1>
      <div className="course-cards">
        {data.pathway?.courses.map(course => (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                <img src={course.logo} alt={course.name} />
              </Typography>
              <Typography variant="h5" component="div">
              {bull}{course.name}
              </Typography>
            </CardContent>
          </Card>
        )
        )}
      </div>
    </div>
  );
}

export default Course;
