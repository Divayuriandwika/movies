import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from 'react-bootstrap/Card'
import Header from '../component/Header'
import { useEffect } from 'react';
import {getMovieID} from '../redux/actions/moviesAction'
import GradeIcon from '@material-ui/icons/Grade';
import Hidden from '@material-ui/core/Hidden';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: 'black',
    paddingLeft: 0,
    paddingRight: 0,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    // background: 'lightblue'
  },
  fixedHeight: {
    height: 240,
  },
  maintitle: {
    fontSize: 40,
    marginTop: 10,
    marginBottom: 40,
    fontFamily: 'Playfair Display serif'
  },
  title: {
    fontSize: 22,
  },
  detail: {
    fontSize: 17,
  }
}));

export default function Dashboard(props) {

    console.log(props);

    const movieId= props.match.params.movieId;
    const [movie, setMovie] = React.useState({});

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  
  useEffect(() => {
   getMovieID(movieId).then(res => {
       console.log(res)
    setMovie(state => {
        return {
            ...state, ...res.data.data
        }
    })       
   })

}, []);

console.log('test')

  
  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <main className={classes.content}>
        <Container maxWidth="0" >
        <Header/>

          <Hidden mdDown>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Card className="bg-dark text-white">
                <Card.Img src={movie.poster} alt="image" style={{opacity: 0.3}}/>
                <Card.ImgOverlay>
                <Grid lg={4}>
                  <div>
                    <Card.Title className={classes.maintitle}>{movie.title}</Card.Title>
                    <Card.Text className={classes.title}>{movie.title}</Card.Text>
                    <Card.Text className={classes.detail}>
                    {movie.year} | {movie.genre} | <GradeIcon style={{ color: '#f5c842' }}/>{movie.rating}
                    </Card.Text>
                    <Card.Text className={classes.detail}>{movie.resume}</Card.Text>
                </div>
                </Grid> 
                </Card.ImgOverlay>
                </Card>
                </Grid>   
               </Grid>
             </Hidden>


          <Hidden lgUp>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Card className="bg-dark text-white">
                <Card.Img src={movie.poster} alt="image"/>
                </Card>
                </Grid>

                <Grid item xs={12} md={12} lg={12} style = {{color: 'white'}}>
                  <div>
                    <Card.Title className={classes.maintitle}>{movie.title}</Card.Title>
                    <Card.Text className={classes.title}>{movie.title}</Card.Text>
                    <Card.Text className={classes.detail}>
                    {movie.year} | {movie.genre} | <GradeIcon style={{ color: '#f5c842' }}/>{movie.rating}
                    </Card.Text>
                    <Card.Text className={classes.detail}>{movie.resume}</Card.Text>
                </div>
                </Grid>    
                </Grid>
                </Hidden>

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}



