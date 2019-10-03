import React from "react";
import Loader from "@material-ui/core/CircularProgress";

const CustomLoader = ({ ...other }) => (
  <Loader
    variant="indeterminate"
    color="secondary"
    size={64}
    style={{ minHeight: 64 }}
    {...other}
  />
);

export default CustomLoader;
