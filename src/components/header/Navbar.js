import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Typography,
  Hidden,
  IconButton,
  Link,
  Container,
} from "@material-ui/core/";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  Mail as MailIcon,
  PermIdentity as PermIdentityIcon,
} from "@material-ui/icons";

import NavigationDrawer from "./NavigationDrawer";
import AnimatedLink from "./AnimatedLink";


const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  noDecoration: {
    textDecoration: "none !important",
  },
  link: {
    padding: "12px 15px",
  },
  span_color: {
    color: '#fff',
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function ElevateAppBar(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { link: "/#home", name: "HOME", icon: <HomeIcon /> },
    { link: "/#about", name: "ABOUT", icon: <PermIdentityIcon /> },
    { link: "/#features", name: "features", icon: <WorkIcon /> },
    { link: "/#download", name: "download GD", icon: <MailIcon /> },
    { link: "/contact", name: "contact", icon: <MailIcon /> },
    { link: "/work", name: "work with GD", icon: <MailIcon /> },
  ];

  return (
    <nav id="navbar">
      <HideOnScroll {...props}>
        <AppBar elevation={0} className={classes.appbar}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar} disableGutters>
              <Link className={classes.noDecoration} href="/#" variant="button">
                <Typography variant="h4" color="primary">
                  Great Delivery
                </Typography>
              </Link>

              <Hidden smDown implementation="css">
                {menuItems.map((item) => {
                  return (
                    <AnimatedLink
                      className={classes.link}
                      key={item.name}
                      href={item.link}
                      variant="button"
                      color="inherit"
                      underline="none"
                    >
                      {item.name}
                    </AnimatedLink>
                  );
                })}
              </Hidden>

              <Hidden mdUp implementation="css">
                <IconButton
                  onClick={handleDrawerToggle}
                  aria-label="Open Navigation"
                >
                  <MenuIcon fontSize="large" color="primary" />
                </IconButton>
              </Hidden>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      />
    </nav>
  );
}
