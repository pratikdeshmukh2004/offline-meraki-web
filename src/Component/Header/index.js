import React from 'react';
import { useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from "react-router-dom";
import { Box } from '@mui/material';
import image from './assest/meraki.svg';
import axios from 'axios';
import { PATHS } from '../../Routing/constant';
import { Link } from 'react-router-dom';
import {interpolatePath} from '../../Routing/constant';
import { useParams } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    // menuButton: {
    // //   marginRight: theme.spacing(2),
    //   [theme.breakpoints.up('md')]: {
    //     display: 'none', // Hide the menu button on screens larger than md
    //   },
    // },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: 250,
    },
    appBar: {
        backgroundColor: 'white', // Set the background color to white
        // marginBottom: theme.spacing(2),
      },
  }));
  
function Header() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [pathways, setPathways] = React.useState([]);
    const params = useParams();
    const pathwayId = params.pathwayId;
    console.log(params)
    useEffect(() => {
        // Make a GET request to the API endpoint
        axios.get('https://merd-api.merakilearn.org/pathways')
          .then(response => {
            // Handle successful response
            setPathways(response.data);
          })
          .catch(error => {
            // Handle error
            console.error('Error fetching data:', error);
          });
      }, []);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setDrawerOpen(open);
      };
     

    return (
      
        <div className={classes.root}>
        
        <AppBar position="static" 
        sx={
           {
                background:  "background",
                position:"sticky"

           }
        }
       
        color="background">
          <Toolbar>
         
          <Box
              sx={{ 
               flexGrow: 1,
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                
               }}
               
            >
              <Link >
                <img
                  src={image}
                  loading="lazy"
                  alt="meraki"
                  sx={{marginTop:"10px"}}
                />
                </Link>
               
              <List sx={{display:"flex"}}>
      {pathways?.pathways?.map((text) => (
        
        <ListItem button key={text.id} sx={{borderRadius:"8px"}}>
        {console.log(text)}
        <Link to={interpolatePath(PATHS.PATHWAY_COURSE, {
                      pathwayId: text.id,
                    })} >
            <ListItemText minWidth="fullWidth">
          <Typography variant="subtitle1" component="div" sx={{color:"black"}}
         style={{display:'inline-block',whiteSpace:"nowrap", padding:"10px"}}
          >
          {text.name}
          </Typography>
          </ListItemText>
          </Link>
        </ListItem>
      ))}
    </List>
    </Box>
            
          </Toolbar>
        </AppBar>

       
      </div>
  
  
  
    );
  }
  
  export default Header;


