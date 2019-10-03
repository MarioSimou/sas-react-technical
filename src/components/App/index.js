import React from "react";
import Navbar from "../Navbar";
import "../../components/App/main.css";
import getChatLog from "../../utils/service";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import MessageCard from "../MessageCard";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  grid: {
    width: "100%",
    margin: 0
  },
  gridItem: {
    height: "max-content"
  }
}));

const App = () => {
  const [messages, setMessages] = React.useState([]);
  const classes = useStyles();
  // console.log(messages)
  React.useEffect(() => {
    getChatLog()
      .then(messages => setMessages(messages))
      .catch(e => window.alert("Error component"));
  }, []);

  return (
    <div className="AppContainer">
      <Navbar />
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
            <MessageCard message={message} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
