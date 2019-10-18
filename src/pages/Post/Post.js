import React from 'react';
import NavBar from '../Home/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PostCard from './components/PostCard';
import "./Post.css";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

}));
const RecipeReviewCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Grid container spacing={6}>
        <Grid item xs={12}>
      <NavBar /> 
      </Grid>
      <Grid item xs={3}>
      <PostCard />
      </Grid>
      <Grid item xs={8}>
      <PostCard />
      </Grid>
     
      </Grid>
    </div>
  )
}

export default RecipeReviewCard
