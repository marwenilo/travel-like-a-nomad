import React from 'react';
import SideBar from '../../components/SideBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostCard from '../Post/components/PostCard'
import Article from '../../components/Article'
// import NavBar from '../Home/components/NavBar'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

}));




const Posts = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                </Grid>
                {/* <NavBar /> */}
                <Grid item xs={2}>
                    <SideBar />
                </Grid>
                <Grid item xs={6}>
                    <PostCard />
                    <PostCard />
                </Grid>
                <Grid item xs={3}>
                    <Article/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Posts;
