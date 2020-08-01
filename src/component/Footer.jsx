import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Logoig from '../asset/ignet.png'
import Logofb from '../asset/fbnet.png'
import Logotw from '../asset/twnet.png'
import Logopi from '../asset/pinet.png'
import Logogo from '../asset/gonet.png'
import Logoyo from '../asset/yonet.png'
import '../App.css'



const list = {
  listStyle: 'none',
  marginBottom: 15,
}


const spacing = {
  listStyle: 'none',
  paddingTop: '10px',
}

function Copyright() {
  return (
    <Typography variant="body2" align="center" style={{color: 'grey'}}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        DYD
      </Link>{' '}
      {new Date().getFullYear()}
      {'. All rights reserved.'} | <Link color="inherit" href="#">{'Term and Conditions'}</Link> | <Link color="inherit" href="#">{'Privacy Policy'}</Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      
    },
  },
  logo: {
    width: 40
  },
  text: {
    fontFamily: 'Comfortaa, cursive',
    color: "grey",
  }
}));


export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={5} justify="space-evenly">

        <Grid item xs={6} sm={3} className={classes.text}>
          <li style={list}>FAQ</li>
          <li style={list}>Investor Relations</li>
          <li style={list}>Privacy</li>
          <li style={list}>Speed Test</li>
        </Grid>

        <Grid item xs={6} sm={3} className={classes.text}>
          <li style={list}>Help Center</li>
          <li style={list}>Jobs</li>
          <li style={list}>Cookie Preferences</li>
          <li style={list}>Legal Notices</li>
        </Grid>

        <Grid item xs={6} sm={3} className={classes.text}>
        <li style={list}>Account</li>
          <li style={list}>Ways to Watch</li>
          <li style={list}>Corporate Information</li>
          <li style={list}>Netpliks Originals</li>
        </Grid>

        <Grid item xs={6} sm={3} className={classes.text} >
          <li style={list}>Contact Us</li>
          <li style={list}>(021) 987-6543</li>
          <li style={list}>Netpliks@gmail.com</li>
        </Grid>

          
          <li style={spacing}>
          <Link color="inherit" href="https://www.instagram.com/"><img src={Logoig} alt="My logo" className={classes.logo}/></Link>{' '}
          <Link color="inherit" href="https://www.facebook.com/"><img src={Logofb} alt="My logo" className={classes.logo}/></Link>{' '}
          <Link color="inherit" href="https://twitter.com/"><img src={Logotw} alt="My logo" className={classes.logo}/></Link>{' '}
          <Link color="inherit" href="https://www.pinterest.com/"><img src={Logopi} alt="My logo" className={classes.logo}/></Link>{' '}
          <Link color="inherit" href="https://www.google.com/"><img src={Logogo} alt="My logo" className={classes.logo}/></Link>{' '}
          <Link color="inherit" href="https://www.youtube.com/"><img src={Logoyo} alt="My logo" className={classes.logo}/></Link>{' '}
          </li>
          
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}