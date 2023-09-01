import React from "react";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import {
    Container,
    Box,
    AppBar,
    Toolbar,
    useMediaQuery,
    Typography,
    Button,
    Select,
    MenuItem,
    ListItem,
    ListItemButton,
    ListItemText,
    Drawer,
    Grid,
    Link,
  } from "@mui/material";
import get from "lodash/get";
import DOMPurify from "dompurify";
import axios from "axios";
import { useEffect } from "react";


const createVisulizeURL = (code, lang, mode) => {
  // only support two languages for now
  const l = lang == "python" ? "2" : "js";
  const replacedCode = code && code.replace(/<br>/g, "\n");
  const visualizerCode = replacedCode.replace(/&emsp;/g, " ");
  const url = `http://pythontutor.com/visualize.html#code=${encodeURIComponent(
    visualizerCode
  )
    .replace(/%2C|%2F/g, decodeURIComponent)
    .replace(/\(/g, "%28")
    .replace(
      /\)/g,
      "%29"
    )}&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=${mode}&origin=opt-frontend.js&py=${l}&rawInputLstJSON=%5B%5D&textReferences=false`;
  return url;
};

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

const headingVarients = {};

[Typography, "h2", "h3", "h4", "h5", "h6"].forEach(
  (Name, index) =>
    (headingVarients[index + 1] = (data) => (
      <UnsafeHTML
        Container={Name}
        // className={classes.heading}
        align="left"
        html={data}
        {...(index === 0 ? { component: "h1", variant: "h6" } : {})}
      />
    
    ))
);

function PathwayExercise() {
   const [exercise, setExercise] = useState([]);
   const [exerciseId, setExerciseId] = useState();
    useEffect(() => {
        // Make a GET request to the API endpoint
        axios.get(`https://pratikdeshmukh2004.github.io/offline-meraki-web/data/exercises/data_types.json`)
          .then(response => {
            console.log(response, 'response...');
            // Handle successful response
            setExercise(response.data);
            setExerciseId(response.data?.course?.exercises[0]?.id);
          })
          .catch(error => {
            // Handle error
            console.error('Error fetching data:', error);
          });
      }, []);
    
    
    return (
        <div>
            <Container maxWidth="lg" margin="64px 0px">
          
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={10} lg={10}>
              {
              exercise?.course
               && exercise.course.exercises.map((item) => {
                return(
                 item.id===exerciseId 
                 && item.content.map((content) => (
                  <>
                    {content.component === "header" &&
                    <Box 
                    sx={{margin: "30px 0 10px 0", alignItems: "left",}}
                    >
                    {headingVarients[content.variant](DOMPurify.sanitize(get(content, "value")))}
                  </Box>

                    }
                    {content.component === "text" &&
                    
                    <Box
                        sx={{display: "flex",
                            marginTop: "20px",}}    
                    >
          <CircleIcon sx={{ pr: "12px", width: "7px" }} />
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(get(content, "value")) }}
          />
        </Box>}
                    
                    {
                      content.component === "code" && 
                      <div>
                    <Box 
                  sx={{background: "#E5E5E5",
                        padding: 16,
                        margin: "15px 0",
                        borderRadius: "8px",
                        width: "30%",
                        }}
                    >
                      {/* <Toolbar disableGutters> */}
                      <Box sx={{ display: "flex", pb: 2 }}>
                        <img
                          src={require("./asset/code-example.svg").default}
                          loading="lazy"
                         sx={{marginRight: 10,}}
                        />
                        <Typography variant="subtitle1">Code Example</Typography>
                      </Box>
                      {/* </Toolbar> */}
                      <Typography
                        sx={{whiteSpace: "pre-wrap",
                            }}
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(get(content, "value")),
                        }}
                      />
                      <Grid container justifyContent="flex-end" mt={2}>
                        <Button
                          variant="contained"
                          // color="dark"
                          target="_blank"
                          href={createVisulizeURL(get(content, "value"), content.type, "display")}
                        >
                          Visualize
                        </Button>
                      </Grid>
                    </Box>
                  </div>
                    }
                  </>
                )))
              }
                
                       
               
                     
                     )}
              

              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2}>
              <Drawer
            variant="permanent"
          anchor="left"
          PaperProps={{
            style: {
              border: "none",
              position: "static",
              paddingTop: "40px",
              width: "250px",
              height: "50%",

            },
          }}
            >
            <Typography variant="h5">Course Content</Typography>
                    {exercise?.course && exercise.course.exercises.map((item) => (
                       
                      <ListItem key={item.id} component="div" >
                    <ListItemButton 
                         onClick={() => setExerciseId(item.id)}
                         >
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                        
                    
                    ))}
                    </Drawer>
              </Grid>
            </Grid>
            
            </Container>
        </div>
        
    );
}
export default PathwayExercise;