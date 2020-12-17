import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import theme from './styles/theme';

const styles = {
  root: {
    padding: "10px",
    textDecoration: "none",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      width: 0,
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: theme.palette.primary.main,
      visibility: "hidden",
      transition: "all 0.3s ease-in-out",
    },
    "&:hover::before": {
      visibility: "visible",
      width: "100%",
    },
  },
};

function AnimatedLink(props) {
  const { classes, children, className, href ,...other } = props;

  return (
    <Link className={clsx(classes.root, className)} href={href} {...other}>
      {children || "class names"}
    </Link>
  );
}

export default withStyles(styles)(AnimatedLink);
