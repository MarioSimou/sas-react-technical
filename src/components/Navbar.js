import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/styles/makeStyles";
import logo from "../assets/img/logo.png";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: theme.spacing(3)
  },
  logo: {
    backgroundColor: "transparent",
    width: theme.spacing(12),
    height: theme.spacing(4)
  }
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
