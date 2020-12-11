import React from 'react';

import { makeStyles, Grid, Paper, Container, Typography, Box } from '@material-ui/core';
import { Directions } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: 0,
        outline: 0,
        boxSizing: 'border-box',
        width: '100%',
        height: '100vh',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: theme.spacing(3),
        width: '100%',
        border: '3px solid tomato',
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    img: {
        width: '100%',
        height: '100%',
        margin: theme.spacing(3)
    },
    section_about: {
        alignItems: 'center',
        padding: theme.spacing(3),
    },
    section_about_item: {
        display: 'grid',
        gap: 10,
        padding: theme.spacing(6),

        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center'
        },

    },
    section_about_item_download_box: {
        display: 'flex',
        gap: theme.spacing(2)

    }
}));

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12 (Header)</Paper>
                </Grid>


                <Grid container className={classes.section_about} xs={12}>
                    <Grid item xs={12} sm={12} md={6}>
                        <img className={classes.img} src="/images/undraw_add_to_cart_vkjp.svg" />
                    </Grid>
                    <Grid item className={classes.section_about_item} xs={12} sm={12} md={6}>
                        <Typography variant="h4" color="primary">
                            Grocery shopping has never been so easy
                        </Typography>

                        <Typography variant="subtitle1">
                            Quickie is a mobile app, where you can order groceries and have them delivered to your door <strong>in as little as 1 hour!</strong>
                        </Typography>
                        <Typography variant="subtitle1">
                            <strong> our first delivery is FREE </strong>
                        </Typography>
                        <Box className={classes.section_about_item_download_box} component="div">
                            <a href="#"><img src="/images/apple-store-badge.svg" /></a>
                            <a href="#"><img src="/images/google-play-badge.svg" /></a>
                        </Box>
                        <Typography variant="subtitle1" >
                            <strong> Download the app and order now! </strong>
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container style={{border: '3px solid green'}} >
                    <Grid item xs={12} >
                        <Typography variant="h4" color="primary" align="center">
                            How does it work?
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Container className={classes.container} maxWidth="md">
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>xs=6 (How it Works)</Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>xs=6 (How it Works)</Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>xs=6 (How it Works)</Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>xs=6 (How it Works)</Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>xs=6 (How it Works)</Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>xs=6 (How it Works)</Paper>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>

                <Grid className={classes.container} container >
                    <Container className={classes.container} maxWidth="md">
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>xs=6 (Features)</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>xs=6 (Features)</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>xs=6 (Features)</Paper>
                        </Grid>
                    </Container>
                </Grid>

                <Grid className={classes.container} container >
                    <Grid className={classes.container} container >
                        <Container className={classes.container} maxWidth="md">
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>xs=6 (Download App Sec.1)</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>xs=6 (Download App Sec.1)</Paper>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid className={classes.container} container >
                        <Container className={classes.container} maxWidth="md">
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>xs=6 (Download App Sec.2)</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>xs=6 (Download App Sec.2)</Paper>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid className={classes.container} container >
                        <Container className={classes.container} maxWidth="md">
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>xs=6 (Download App Sec.3)</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>xs=6 (Download App Sec.3)</Paper>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12 (As seen On)</Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12 (Footer)</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;