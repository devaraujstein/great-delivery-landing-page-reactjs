import React from 'react';

import NavBar from '../components/header/Navbar';
import CarouselAuto from '../components/Carousel/CarouselAuto';
import Footer from '../components/footer/Footer';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper, Container, Typography, Box, Button, Divider } from '@material-ui/core';

import TimerIcon from '@material-ui/icons/Timer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';


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
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        textAlign: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
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
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#f9423a',
        width: '100%',
        height: '100%',

        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            width: '100%',
        },
    },
    footer_items: {
        color: '#fff',
        display: 'flex',
        gap: theme.spacing(10),
        margin: '0 20px',
    }
}));

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container style={{ backgroundColor: '#f8f9fa' }}>

                {/* NAVBAR */}

                <Grid item xs={12}>
                    <NavBar />
                </Grid>

                <div style={{ marginBottom: '40px' }} />

                {/* HOME */}

                <Grid container id="home" className={classes.section_about} xs={12}>
                    <Grid item xs={12} sm={12} md={6}>
                        <img className={classes.img} src="/images/undraw_add_to_cart_vkjp.svg" alt="Delivery" />
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
                            <a href="/"><img src="/images/apple-store-badge.svg" alt="Apple Store" /></a>
                            <a href="/"><img src="/images/google-play-badge.svg" alt="Google Play" /></a>
                        </Box>
                        <Typography variant="subtitle1" >
                            <strong> Download the app and order now! </strong>
                        </Typography>
                    </Grid>
                </Grid>

                {/* ABOUT */}

                <Grid container id="about">
                    <Grid item xs={12}>
                        <Typography variant="h4" color="primary" align="center">
                            How does it work?
                        </Typography>
                    </Grid>

                    <Container className={classes.container} maxWidth="lg" >
                        <Grid container xs={12} spacing={2} >
                            <Grid item xs={12} sm={12} md={6}  >
                                <Paper elevation={3} component="div" className={classes.box} >
                                    <Box component="div" p={3}>
                                        <Typography variant="h4">
                                            Order online with the Quickie App
                                        </Typography>

                                        <div style={{ marginBottom: '20px' }} />

                                        <Typography variant="subtitle1">
                                            Choose your store of preference and scroll through the app aisles to select all your groceries.
                                            Find everything you usually buy and more.
                                        </Typography>
                                    </Box>

                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Paper elevation={3} component="div" className={classes.box}>
                                    <img className={classes.img} src="/images/first-image.jpg" alt="Order" />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Paper elevation={3} component="div" className={classes.box}>
                                    <img className={classes.img} src="/images/second-image.jpg" alt="Shopper" />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Paper elevation={3} component="div" className={classes.box}>
                                    <Box component="div" p={3}>
                                        <Typography variant="h4">
                                            Our Shoppers will care for your order
                                        </Typography>

                                        <div style={{ marginBottom: '20px' }} />

                                        <Typography variant="subtitle1">
                                            We know how to pick the freshest produce and ripeness.
                                            And we'll keep your eggs and frozen foods safe too.
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Paper elevation={3} component="div" className={classes.box}>
                                    <Box component="div" p={3}>
                                        <Typography variant="h4">
                                            Your groceries in as little as 1 hour
                                        </Typography>

                                        <div style={{ marginBottom: '20px' }} />

                                        <Typography variant="subtitle1">
                                            Your groceries will be delivered at the time of your choice.
                                            From 1 hour up to 7 days in advance.
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Paper elevation={3} component="div" className={classes.box}>
                                    <img className={classes.img} src="/images/third-image.jpg" alt="Delivered" />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>

                {/* FEATURES */}

                <Grid container id="features" >
                    <Grid item xs={12}>
                        <Typography variant="h4" color="primary" align="center">
                            Our features
                        </Typography>
                    </Grid>

                    <Container className={classes.container} maxWidth="lg">
                        <Grid container xs={12} spacing={2} >
                            <Grid item xs={12} sm={12} md={4}>
                                <Paper elevation={4} className={classes.paper}>
                                    <Box component="div" p={3}>
                                        <TimerIcon color="primary" style={{ width: '100%', height: '15vh' }} />
                                        <Typography variant="h4" color="primary">
                                            1h Delivery
                                        </Typography>

                                        <div style={{ marginBottom: '20px' }} />

                                        <Typography variant="subtitle1">
                                            Forget "next day delivery", with Quickie you get what you want, when you want it! All in 1, 2 or 3 hours.
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Paper elevation={4} className={classes.paper}>
                                    <Box component="div" p={3}>
                                        <AccountCircleIcon color="primary" style={{ width: '100%', height: '15vh' }} />
                                        <Typography variant="h4" color="primary">
                                            Personalized
                                        </Typography>

                                        <div style={{ marginBottom: '20px' }} />

                                        <Typography variant="subtitle1">
                                            Don't worry, we're paying attention. We take note of all your preferences and remember them next time.
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Paper elevation={4} className={classes.paper}>
                                    <Box component="div" p={3}>
                                        <NotificationsActiveIcon color="primary" style={{ width: '100%', height: '15vh' }} />
                                        <Typography variant="h4" color="primary">
                                            Notifications
                                        </Typography>

                                        <div style={{ marginBottom: '20px' }} />

                                        <Typography variant="subtitle1">
                                            Our app will send you notifications on all your shopper actions,
                                            and will let you know when the shopper is on the way to you.
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>

                {/* DOWNLOAD */}

                <Grid>

                </Grid>

                {/* QUICKIE AS SEEN ON */}

                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <Typography variant="h4" color="primary" align="center">
                            Quickie as seen on
                        </Typography>
                    </Grid>

                    <Container className={classes.container} maxWidth="lg">
                        <Grid container xs={12} spacing={2} >
                            <Box className={classes.box} style={{ backgroundColor: 'white' }}>
                                <CarouselAuto />
                            </Box>

                        </Grid>
                    </Container>
                </Grid>

                {/* FOOTER */}

                <Grid container xs={12} justify="center" style={{ backgroundColor: '#f9423a' }}>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;