import React from 'react';
import NavBar from '../Home/components/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SidBar from '../../components/SideBar';
import PostCard from './components/PostCard';

import "./Post.css";


const usesStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

}));
const postCard = () => {
  const classes = usesStyles();
  return (
    <div className={classes.root} >
      <Grid container spacing={6}>
        <Grid item xs={12}>
      <NavBar /> 
      </Grid>
      <Grid item xs={3}>
      <SidBar />
      </Grid>
      <Grid item xs={8}>
      <PostCard />
      </Grid>
     
      </Grid>
    </div>
  )
}

export default postCard