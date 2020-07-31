import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    background: 'white'
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Movie"
          >
            <img src={`${props.poster}`} alt='Movie' style={{height: 200, maxWidth: 400}}/>
        </CardMedia>
        
          <Typography  style = {{textAlign: 'center', background: 'black', color: 'white'}}>
            {props.title}
          </Typography>
      
      </CardActionArea>
    </Card>
  );
}
