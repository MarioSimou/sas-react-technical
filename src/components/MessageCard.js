import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Collapse from "@material-ui/core/Collapse";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { fade } from "@material-ui/core/styles/colorManipulator";
import makeStyles from "@material-ui/styles/makeStyles";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  position: "relative",
  root: {
    backgroundColor: fade(theme.palette.primary.light, 0.3),
    "&:hover": {
      cursor: "pointer",
      opacity: "0.8"
    },
    backgroundColor: '#383838'
  },
  subheader: {
    color: theme.palette.primary.dark
  },
  cardActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  emailDialog: {
    width: "100%",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(1),
    minHeight: theme.spacing(5),
    backgroundColor: fade("#000", 0.8),
    color: theme.palette.primary.contrastText
  }
}));

const MessageItem = ({ message, ...other }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const onClickExpand = () => setExpanded(!expanded);
  const onMouseEnterCard = () => setHover(true);
  const onMouseLeaveCard = () => setHover(false);

  return (
    <Card
      className={classes.root}
      {...other}
      onMouseEnter={onMouseEnterCard}
      onMouseLeave={onMouseLeaveCard}
    >
      <Typography align="right" className={classes.emailDialog}>
        {hover ? message.email : ""}
      </Typography>
      <CardHeader
        avatar={
          <Avatar
            alt={message.userId}
            src={message.avatar}
            className={classes.avatar}
          />
        }
        title={
          <Typography align="left" variant="body1" className={classes.title}>
            {message.fullName}
          </Typography>
        }
        subheader={
          <Typography
            variant="body2"
            align="left"
            className={classes.subheader}
          >
            {moment(message.timestamp).format("MMMM Do YYYY, h:mm::ss a")}
          </Typography>
        }
      />
      <CardActions disableSpacing className={classes.cardActions}>
        <div>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>
        <IconButton aria-label="expand" onClick={onClickExpand}>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.content}>
          <Typography align="left" variant="body2" component="p">
            {message.message}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MessageItem;
