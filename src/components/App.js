import React from "react";
import Navbar from "./Navbar";
import Messages from "./Messages";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Loader from "../utils/components/Loader";
import getChatLog from "../utils/service";
import theme from "../utils/theme";

const App = () => {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    getChatLog()
      .then(messages => setMessages(messages))
      .catch(e => window.alert("Error while the component was loading..."));
  }, []);

  if (!messages.length)
    return (
      <div
        className="AppContainer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Loader />
      </div>
    );

  return (
    <ThemeProvider theme={theme}>
      <div className="AppContainer">
        <Navbar />
        <Messages messages={messages} />
      </div>
    </ThemeProvider>
  );
};

export default App;
