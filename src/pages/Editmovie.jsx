import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from 'react-bootstrap/Card'
import Button from "@material-ui/core/Button";
import Collapse from 'react-bootstrap/Collapse'
import Editform from '../component/Editform'
import Header from '../component/Headeradmin1'
import { useEffect } from 'react';
import {getMovieID} from '../redux/actions/moviesAction'
import {useDispatch} from 'react-redux'
import GradeIcon from '@material-ui/icons/Grade';
import Hidden from '@material-ui/core/Hidden';
import {deleteMovie} from '../redux/actions/moviesAction'
import { useHistory } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import Footer from '../component/Footer'



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
  }, 
  button: {
    color: 'white',
    border: '2px ridge white',
    marginRight: 10,
    marginBottom: 20,
    marginTop: 20,
    '&:hover' : {
      background: 'red',
  },
  }
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
    await history.push('/admin')
  };
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <main className={classes.content}>
        <Container maxWidth="0" >
        <Header/>


             <div>
               <Button  
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} 
                    className={classes.button}
                    >
                        Edit
                    </Button>
                    <Button  className={classes.button} onClick= {() => deleteThisItem(movieId)}>
                        Delete
                    </Button>
                    </div>
                    <Collapse in={open}>
                      <Grid item xs={12} md={12} lg={4}>
                    <Paper id="example-collapse-text" className={classes.paper} style={{marginBottom: 20}}>
                    <Editform movie = {movie}
                    />
                    </Paper>
                    </Grid>
                </Collapse>

        <Hidden mdDown>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Card className="bg-dark text-white">
                <Card.Img src={movie.poster} alt="image" style={{opacity: 0.3}} />
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
            <Footer/>
          </Box>
        </Container>
      </main>
    </div>
  );
}



