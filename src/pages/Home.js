import React from 'react';

import { makeStyles, Grid, Paper, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: theme.spacing(3),
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

                
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12 (About)</Paper>
                </Grid>
                

                <Grid className={classes.container} container >
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