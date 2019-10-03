import React from "react";
import Grid from "@material-ui/core/Grid";
import Message from "./Message";
import LazyLoad from "react-lazyload";
import Loader from "../utils/components/Loader";
import makeStyles from "@material-ui/styles/makeStyles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  grid: {
    padding: theme.spacing(2.5),
    width: "100%",
    margin: 0
  },
  gridItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const Messages = ({ messages }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.grid}>
      {messages.slice(0, 50).map(message => (
        <Grid
          item
          sm={6}
          md={4}
          lg={3}
          className={classes.gridItem}
          key={message.messageId}
        >
          <LazyLoad offset={[-100, 0]} placeholder={<Loader />} once={true}>
            <Message message={message} />
          </LazyLoad>
        </Grid>
      ))}
    </Grid>
  );
};

Messages.propTypes = {
  messages: PropTypes.array.isRequired
};

export default Messages;
