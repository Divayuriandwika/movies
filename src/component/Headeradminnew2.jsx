import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./Headeradminnew3";
import {Link} from 'react-router-dom'

const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
  logo: {
    maxWidth: 30,
    margin: 5,
  },
});



const AppBarCollapse = (props) => (
      

  <div className={props.classes.root}>

    <ButtonAppBarCollapse>
    
      <MenuItem style={{ color: "red" }} onClick={() => window.location.reload(false)}>Home</MenuItem>

      <Link to= "/" style={{color: 'white'}}>
      <MenuItem style={{ color: "red" }} >Logout</MenuItem>
      </Link>
    </ButtonAppBarCollapse>


    <div className={props.classes.buttonBar} id="appbar-collapse"> 
      <Button 
      color="inherit" 
      style={{backgroundColor: 'red', color: 'white', marginRight: 10}}
      onClick={() => window.location.reload(false)}>
        Home
        </Button>
      <Link to= "/" style={{color: 'white'}}>
      <Button color="inherit" style={{backgroundColor: 'red', color: 'white'}}>Logout</Button>
      </Link>
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
