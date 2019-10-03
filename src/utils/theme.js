import { createMuiTheme } from "@material-ui/core/styles";

const primary = {
  light: "#e8e8e8",
  main: "#c4c4c4",
  dark: "#939393",
  contrastText: "#fff"
};

const secondary = {
  light: "#ffe6d2",
  main: "#ADD8E6",
  dark: "#ffa052",
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
