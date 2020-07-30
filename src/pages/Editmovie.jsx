import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from 'react-bootstrap/Card'
import Logo from '../asset/wallpaper1.jpg'
import Button from "@material-ui/core/Button";
import Collapse from 'react-bootstrap/Collapse'
import Editform from '../component/Editform'
import Header from '../component/Header'
import { useEffect } from 'react';
import {getMovieID} from '../redux/actions/moviesAction'
import {useDispatch} from 'react-redux'
import GradeIcon from '@material-ui/icons/Grade';
import Hidden from '@material-ui/core/Hidden';
import {deleteMovie} from '../redux/actions/moviesAction'
import { useHistory } from 'react-router-dom';


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
}));

export default function Dashboard(props) {

    console.log(props);

    const movieId= props.match.params.movieId;
    const [movie, setMovie] = React.useState({});

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const history = useHistory();
  
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

const deleteThisItem = async(id) => {
    await dispatch(deleteMovie(id))
    await alert ('Delete movie success')
    await history.push('/')
  };
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <main className={classes.content}>
        <Container maxWidth="0" >
        <Header/>

          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Card className="bg-dark text-white">
                <Card.Img src={movie.poster} alt="Card image" />
                <Hidden mdDown>
                <Card.ImgOverlay>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.title}</Card.Text>
                    <Card.Text>
                    {movie.year} | {movie.genre} | <GradeIcon style={{ color: '#f5c842' }}/>{movie.rating}
                    </Card.Text>
                    <Card.Text>{movie.resume}</Card.Text>
                </Card.ImgOverlay>
                </Hidden>
                </Card>
                <div>
                <Button  
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} color="primary">
                        Edit
                    </Button>
                    <Button  color="primary" onClick= {() => deleteThisItem(movieId)}>
                        Delete
                    </Button>
                    </div>
                    <Collapse in={open}>
                    <div id="example-collapse-text" style={{color: 'white'}}>
                    <Editform movie = {movie}
                    />
                    </div>
                </Collapse>
            </Grid>
          </Grid>

          <Hidden lgUp>
            <Grid item xs={12} md={12} lg={12} style = {{color: 'white'}}>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.title}</Card.Text>
                    <Card.Text>
                    {movie.year} | {movie.genre} | <GradeIcon style={{ color: '#f5c842' }}/>{movie.rating}
                    </Card.Text>
                    <Card.Text>{movie.resume}</Card.Text>
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



