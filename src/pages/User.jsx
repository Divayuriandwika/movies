import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '../component/Card'
import Header from '../component/Headeruser2'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import Search from '../component/Searchbar'
import { Paper } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useDispatch} from 'react-redux'
import {sortRatingHigh} from '../redux/actions/moviesAction'
import {sortRatingLow} from '../redux/actions/moviesAction'
import Footer from '../component/Footer'



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
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 120,
    background: 'black',
    border: '2px ridge white',
    borderRadius: '5px',
    '&:hover' : {
      background: 'red',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const history = useHistory();
  const [age, setAge] = React.useState('');
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const allMovies = useSelector((state) => state.allMovies)
  console.log(allMovies)

  const sortRatingUp = async() => {
    await dispatch(sortRatingHigh())
    await alert ('Get High Rating Movie success')
  };

  const sortRatingDown = async() => {
    await dispatch(sortRatingLow())
    await alert ('Get Low Rating Movie success')
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <main className={classes.content}>
        <Container maxWidth="0">
        <Header/>

        <Grid container spacing={3}>
        <Grid item xs={6} md={6} lg={10}>
                        <Paper >
                            {/* side */}
                        </Paper>
                    </Grid>

        <Grid item xs={6} md={6} lg={2} >
            <div className={classes.paper}>
            <FormControl variant="outlined"  size='small' className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label" style={{color: 'white'}}>Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem onClick={sortRatingUp}>High-Low Rating</MenuItem>
          <MenuItem onClick={sortRatingDown}>Low-High Rating</MenuItem>
        </Select>
      </FormControl>
            </div>
            </Grid>
            </Grid>

        <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={3}>
                        <Paper >
                            {/* side */}
                        </Paper>
                    </Grid>

        <Grid item xs={12} md={12} lg={9} >
            <div className={classes.paper} style={{marginBottom: 50}}>
            <Search/>
            </div>
            </Grid>
            </Grid>

            <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={1}>
                        <Paper >
                            {/* side */}
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={12} lg={10}>
                    <div>
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
                    </div>
                    </Grid>

                    <Grid item xs={12} md={12} lg={1}>
                        <Paper >
                            {/* side */}
                        </Paper>
                    </Grid>
                    </Grid>


          <Box pt={4}>
            <Footer/>
          </Box>
        </Container>
      </main>
    </div>
  );
}