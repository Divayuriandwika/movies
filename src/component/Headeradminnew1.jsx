import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'
import {getAll} from '../redux/actions/moviesAction'
import '../App.css'
import Header2 from './Headeradminnew2'
import logo from '../asset/logonet.png'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    backgroundColor: 'black',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    color: 'red',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: 30
    
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: 'white'
  },
  logo : {
    maxWidth: 30,
    margin: 5
  },
  button: {
      backgroundColor: 'red',
      color: 'white'
  }
}));



export default function Pricing() {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
   
    dispatch(getAll());

}, [dispatch]);

console.log('test')
  

  return (
    <div className={classes.root}>
    <React.Fragment>
        <CssBaseline />
        <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
            
        >
            <Toolbar className={classes.toolbar}>
            <img src={logo} alt="Logo" style={{height: 30}} onClick={() => window.location.reload(false)}/>

                <Header2/>
                
            </Toolbar>
        </AppBar>
    </React.Fragment>
</div>
  );
}