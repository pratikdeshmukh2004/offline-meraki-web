import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  CardMedia,
  Button,
  CardActions,
  Skeleton,
  LinearProgress,
  CardContent,
} from "@mui/material";

import {Link} from 'react-router-dom';



import axios from "axios";
import Header from "../header.js";

const Pathways = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://pratikdeshmukh2004.github.io/offline-meraki-web/data/python_courses.json`
      )
      .then((response) => {
        console.log(response);
        setCourses(response?.data?.courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* <h4 style={{textAlign: 'center'}}>Courses</h4> */}
      {/* <div className="grid"> */}
        {/* {courses.map((c) => (
          <div className="box" key={c.id}>
            <img width={50} height={50} src={c.logo}/>
            <h4>{courses.name}</h4>
          </div>
        ))} */}
      {/* </div> */}

      <Container>
        <Typography variant="h6" sx={{ mt: 8, ml: 2 }} align="left">
          {" "}
          Courses
        </Typography>
        <Grid container spacing={3} align="center">
          {courses.map((course, index) => (
            <Grid item key={index} xs={12} md={3}>
              <Link style={{textDecoration: "none"}} to={"/course/"+course.name}>
              <Card
                
                sx={{
                  minWidth: "150px",
                  borderRadius: "8px",
                  margin: "16px 0",
                  height: "100%",
                  "&:hover": {
                    boxShadow:
                      "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 6px 30px rgba(0, 0, 0, 0.04), 0px 8px 10px rgba(0, 0, 0, 0.08)",
                  },
                }}
                elevation={0}
              >
                <img
                  src={course.logo}
                  alt="course"
                  style={{
                    width: "100%",
                    height: "200px ",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    marginTop: "8px",
                    height: "30px",
                    p: "0px 8px 0px 0px",
                  }}
                >
                  <Typography align="center" variant="body1">
                    {course.name}
                  </Typography>
                </CardContent>
              </Card>
              </Link>
             
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default Pathways;
