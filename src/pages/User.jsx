import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from '../component/Card'
import Header from '../component/Header'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import Search from '../component/Searchbar'




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
    background: 'black'
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

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const history = useHistory();

  const allMovies = useSelector((state) => state.allMovies)
  console.log(allMovies)

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <main className={classes.content}>
        <Container maxWidth="0">
        <Header/>

            <Grid item xs={12} md={12} lg={12} >
            <div className={classes.paper} style={{alignItems: 'center'}}>
            <Search/>
            </div>
            </Grid>

        <Grid container spacing={1}>
                        {allMovies.map((item) => {
                                console.log(allMovies);
                                
                                return (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        lg={3}
                                        key={item.id}
                                    >
                                        <div className={classes.paper} onClick={() => {history.push(`/review/${item._id}`)}}>
                                            <Card
                                                poster={item.poster}
                                                title={item.title}
                                                id={item.id}
                                            />
                                        </div>
                                    </Grid>
                                );
                            })}
                    </Grid> 

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}