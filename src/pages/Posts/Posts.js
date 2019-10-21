import React from 'react';
<<<<<<< HEAD
=======
import './Posts.css'

>>>>>>> master
import SideBar from '../../components/SideBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostCard from '../Post/components/PostCard'
<<<<<<< HEAD

=======
import Article from '../../components/Article'
import NavBar from '../Home/components/NavBar'
>>>>>>> master
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

}));




const Posts = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
<<<<<<< HEAD
            <Grid container spacing={3}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={3}>
=======
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <NavBar></NavBar>
                </Grid>
                {/* <NavBar /> */}
                <Grid item xs={2}>
>>>>>>> master
                    <SideBar />
                </Grid>
                <Grid item xs={6}>
                    <PostCard />
                    <PostCard />
                </Grid>
<<<<<<< HEAD
=======
                <Grid item xs={3}>
                    <Article/>
                    <Article/>
                </Grid>
>>>>>>> master
            </Grid>
        </div>
    )
}

export default Posts;
