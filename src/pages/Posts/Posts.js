import React from 'react';
import SideBar from '../../components/SideBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostCard from '../Post/components/PostCard'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

}));




const Posts = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={3}>
                    <SideBar />
                </Grid>
                <Grid item xs={6}>
                    <PostCard />
                    <PostCard />
                </Grid>
            </Grid>
        </div>
    )
}

export default Posts;
