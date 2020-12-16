import React from 'react';

import { Grid, Container, Typography, Button, Divider } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        color: '#fff',
    },
}));

function Footer() {

    const classes = useStyles();

    return (
        <>
            <Grid container xs={12} justify="center" style={{ backgroundColor: '#f9423a' }}>
                <Container className={classes.container} maxWidth="lg" style={{ marginTop: '80px' }} >
                    <Grid container justify="space-around" alignItems="center" >
                        <Grid item style={{ display: 'inline-block' }}>
                            <Typography variant="h4">
                                QUICKIE
                            </Typography>
                        </Grid>
                        <Grid item style={{ display: 'inline-block' }}>
                            <Typography variant="body2">
                                Interested in making extra money?
                                </Typography>
                        </Grid>
                        <Grid item style={{ display: 'inline-block' }}>
                            <Button variant="outlined" color="inherit" >
                                Become a shopper
                        </Button>
                        </Grid>
                    </Grid>
                </Container>

                <Grid item xs={10} justify="center" alignItems="center">
                    <Divider variant="fullWidth" style={{ margin: '30px 0 ' }} />
                </Grid>

                <Container className={classes.container} maxWidth="lg" >
                    <Grid container justify="space-around" alignItems="center">
                        <Grid item style={{ display: 'inline-block' }}>
                            <Typography>
                                Terms
                                </Typography>
                            <Typography>
                                Privacy
                                </Typography>
                            <Typography>
                                Store Disclaimer
                                </Typography>
                        </Grid>
                        <Grid item style={{ display: 'inline-block' }}>
                            <Typography>
                                Help Centre
                                </Typography>
                            <Typography>
                                Contact
                                </Typography>
                        </Grid>
                        <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button startIcon={<PhoneIphoneIcon />} color="inherit">
                                App Store
                        </Button>
                            <Button startIcon={<ArrowRightIcon />} color="inherit">
                                Google Play
                        </Button>
                        </Grid>
                        <Grid item style={{ display: 'flex' }}>
                            <FacebookIcon fontSize="large" />
                            <TwitterIcon fontSize="large" />
                            <LinkedInIcon fontSize="large" />
                        </Grid>
                    </Grid>
                </Container>

                <Container className={classes.container} maxWidth="lg" >
                    <Grid container justify="space-around" alignItems="center">
                        <Grid item style={{ display: 'inline-block' }}>
                            <Typography>
                                2015 - 2020 © Copyright Buymie Technologies Limited,
                                Company Registration Number: ??????, VAT: ??????????? . All rights Reserved.
                                </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
}

export default Footer;