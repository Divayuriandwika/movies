import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux'
import {getAll} from '../redux/actions/moviesAction'



const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    backgroundColor: 'black',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    color: 'white',
    
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: 'white'
  },
  logo : {
    maxWidth: 30,
    margin: 5
  },
}));



export default function Pricing() {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
   
    dispatch(getAll());

}, [dispatch]);

console.log('test')
  

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6"  noWrap className={classes.toolbarTitle}>
            NETPLIKS
          </Typography>

          
    
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}