import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Add from '../component/Addform'
import Logo from '../asset/movie4.jpg'
import Card from 'react-bootstrap/Card'
import Hidden from '@material-ui/core/Hidden';
import Header from '../component/Headeradmin2'
import Footer from '../component/Footer'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'black'
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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Container maxWidth="0" >
          <Header/>

        <Card className="bg-dark text-white">
             <Hidden mdDown>
                <Card.Img src={Logo} alt="" style={{opacity: 0.3}}/>
                    <Card.ImgOverlay>
                      <Grid container spacing={3} style = {{justifyContent: 'center'}}>
                        <Grid item xs={12} md={12} lg={6}>
                          <Paper className={classes.paper} style={{marginTop: 50}}>
                            <Add/>
                          </Paper>
                        </Grid>
                      </Grid>
                      </Card.ImgOverlay>
                    </Hidden>
                    </Card>

                    <Hidden lgUp>
                    <Grid container spacing={3} style = {{justifyContent: 'center'}}>
                        <Grid item xs={12} md={12} lg={6}>
                          <Paper className={classes.paper} style={{marginTop: 50}}>
                            <Add/>
                          </Paper>
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