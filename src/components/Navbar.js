import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/styles/makeStyles";
import logo from "../assets/img/logo.png";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    borderBottom: `1.5px solid ${theme.palette.secondary.main}`,
  },
  logo: {
    backgroundColor: "transparent",
    width: theme.spacing(17.25),
    height: theme.spacing(4)
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="sticky">
      <Toolbar>
        <img className={classes.logo} src={logo} alt="logo" title="logo" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
