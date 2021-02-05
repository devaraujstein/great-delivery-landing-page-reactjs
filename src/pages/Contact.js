import React from 'react';

import NavBar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: 0,
        outline: 0,
        boxSizing: 'border-box',
        width: '100%',
        height: '100vh',
    },
    main: {
        display: 'flex',
        padding: '2%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            gap: '30px',
            width: '100%'
        },
    },
    address_info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '35px',
        textAlign: 'start'
    },
    text_field: {
        display: 'flex',
        flexGrow: 1,
    }
}));

function Contact() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container xs={12} style={{backgroundColor: '#f7f6f2', with: '100%'}}>

                <Grid item xs={12}>
                    <NavBar />
                </Grid>

                <div style={{ marginBottom: '100px' }} />

                <Grid item container xs={12} justify="center" alignItems="center">
                    <Grid item container xs={12} className={classes.main}>
                        <Grid item container xs={12} sm={12} md={6} lg={6} alignItems="center" spacing={5}>
                            <Grid item container className={classes.address_info} >
                                <Grid item xs={5}>
                                    <Typography color="primary">
                                        Brazil Office :
                                    </Typography>
                                    <Typography>
                                        It is a long established fact that a reader will be distracted by the readable.
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography color="primary">
                                        USA Office :
                                    </Typography>
                                    <Typography>
                                        It is a long established fact that a reader will be distracted.
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography align="left" style={{ color: '#17a2b8' }}>
                                        Email : support@great_delivery.com
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} sm={12} md={6} lg={6}>
                            <Grid item container xs={12} justify="center" alignItems="center" spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" align="center" color="primary">
                                        Contact us
                                    </Typography>
                                </Grid>
                                <Grid item container xs={12} >
                                    <form noValidate autoComplete="off" >
                                        <Grid item container xs={12} justify="center" alignItems="center" alignContent="center" spacing={3}>
                                            <Grid item xs={6} >
                                                <TextField className={classes.text_field} id="first-name" label="First Name" variant="outlined" />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField className={classes.text_field} id="last-name" label="Last Name" variant="outlined" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField className={classes.text_field} id="email" label="Email" variant="outlined" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    className={classes.text_field}
                                                    id="message"
                                                    label="Message"
                                                    multiline
                                                    rows={4}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12} >
                                                <Button style={{ width: '100%' }} color="primary" variant="contained">
                                                    Send Message
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{ marginTop: '50px' }}>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact;