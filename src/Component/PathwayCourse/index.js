import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PATHS, interpolatePath } from "../../Routing/constant";
import {
  Container,
  Box,
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
import monitering from "./asset/ComputerScreen.svg";
import {Link} from '@mui/material';
import DOMPurify from "dompurify";
import get from "lodash/get";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

function UnsafeHTML(props) {
  const { html, Container, ...otherProps } = props;
  const sanitizedHTML = DOMPurify.sanitize(html);
  return (
    <Container
      {...otherProps}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
}

function PathwayCourse() {
  const [pathways, setPathways] = React.useState([]);
  const {pathwayId} = useParams();

  
  useEffect(() => {
      // Make a GET request to the API endpoint
      axios.get(`https://api.merakilearn.org/pathways/${pathwayId}/courses?courseType=json`)
        .then(response => {
          // Handle successful response
          setPathways(response.data);
        })
        .catch(error => {
          // Handle error
          console.error('Error fetching data:', error);
        });
    }, [pathwayId]);
    
    console.log(pathways,"pathways")  
  return (
    <div>
      <Container>
      {pathways &&
      <>
      <Card
          align="left"
          elevation={0}
        
        >
          <Typography
                          variant="h4"
                          // className={classes.heading}
                          // sx={{ textAlign: isActive && "center", pb: "16px" }}
                          padding=" 32px 0px"
                        >
                          {pathways?.name}
                        </Typography>
                        <Typography variant="body1">
                          {pathways?.description}
                        </Typography>
                        <Typography
                              style={{ display: "flex" }}
                              mt={2}
                              variant="body2"
                            >
                             {pathways?.video_link && (
                          <Link
                            style={{
                              textDecoration: "none",
                            }}
                            href={pathways?.video_link}
                          >
                              <img
                                src={require("./asset/ComputerScreen.svg").default}
                                alt="MonitorScreen Img"
                              />
                              <section
                                // className={classes.link}
                                // onClick={handleVideo}
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                {"  "} &nbsp; &nbsp;
                                <b>What's it all about?</b>
                              </section>
                              </Link>)}
                            </Typography>

          </Card>
       
                  <Typography variant="h6" sx={{ mt: 8, ml: 2 }} align="left">   Courses</Typography>
              
                  <Grid container spacing={3} align="center">
              
              {
              pathways?.courses?.map((course,index)=>(
                
                <Grid
                        item
                        key={index}
                        xs={12}
                        md={3}
                        // className={classes.courseCard}
                      >
                      
                       <Link
                          // className={classes.pathwayLink}
                          to={interpolatePath(PATHS.PATHWAY_COURSE_CONTENT, {
                            courseId: course.id,
                            exerciseId: 0,
                            pathwayId: pathwayId,
                          })}
                          sx={{textDecoration:"none"}}
                          >
                        <Card
                          // className={classes.pathwayCard}
                          sx={{
                            minWidth: "150px",
                              margin: "16px 0",
                              "&:hover": {
                                boxShadow:
                                  "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 6px 30px rgba(0, 0, 0, 0.04), 0px 8px 10px rgba(0, 0, 0, 0.08)",
                              },
                          }}
                          elevation={0}
                          // sx={{
                          //   ml: 3,
                          //   p: "16px",
                          //   mb:  "16px",
                            
                          // }}
                          
                        >
                         <img
                              
                              src={course.logo}
                              alt="course"
                              style={{width: "100%",
                                height: "200px ",
                                borderRadius: "8px",
                                objectFit: "cover",
                                }}
                            />
                            <CardContent
                              sx={{
                                height:  "30px",
                                p:  "0px 8px 0px 0px",
                              }}
                            >
                            <Typography
                                  align="left"
                                  variant="body1"
                                  
                                >
                                  {course.name}
                                </Typography>

                            </CardContent>

                </Card>
                </Link>
                </Grid>
               
              ))}
              </Grid>
           
          </>


      }
     
      </Container>
      
    </div>
  );
}export default PathwayCourse;