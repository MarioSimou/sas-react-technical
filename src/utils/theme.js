import { createMuiTheme } from "@material-ui/core/styles";

const primary = {
  main: "#011e30",
  dark: "#000A11",
  contrastText: "#fff"
};

const secondary = {
  main: "#ff3d67",
  contrastText: "#fff"
};

const error = {
  light: "#ffaeae",
  main: "#FF9494",
  dark: "#ff6161",
  contrastText: "#fff"
};

export default createMuiTheme({
  palette: {
    primary,
    secondary,
    error
  },
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(",")
  }
});
