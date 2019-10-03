import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import makeStyles from "@material-ui/styles/makeStyles";
import moment from "moment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      cursor: "pointer"
    },
    position: "relative",
    width: "100%"
  },
  title: {
    fontWeight: 700
  },
  subheader: {
    fontWeight: 500,
    opacity: 0.7
  },
  icon: {
    color: theme.palette.primary.contrastText
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  like: {
    color: theme.palette.secondary.main
  },
  email: {
    textAlign: "right",
    fontWeight: 600,
    color: theme.palette.secondary.main,
    letterSpacing: theme.spacing(0.1),
    marginTop: theme.spacing(0.5),
    fontSize: theme.spacing(1.5)
  }
}));

const Message = ({ message, ...other }) => {
  const classes = useStyles();
  const [hover, setHover] = React.useState(false);
  const [like, setLike] = React.useState(false);
  const onMouseEnterCard = () => setHover(true);
  const onMouseLeaveCard = () => setHover(false);
  const onClickLike = () => setLike(!like);

  return (
    <Card
      className={classes.root}
      onMouseEnter={onMouseEnterCard}
      onMouseLeave={onMouseLeaveCard}
      {...other}
    >
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
            {moment(message.timestamp).format("MMMM Do YYYY, h:mm a")}
          </Typography>
        }
      />
      <CardActions disableSpacing className={classes.cardActions}>
        <div>
          <IconButton
            aria-label="add to favorites"
            onClick={onClickLike}
            className={classes.icon}
          >
            <FavoriteIcon className={like ? classes.like : null} />
          </IconButton>
          <IconButton aria-label="share" className={classes.icon}>
            <ShareIcon />
          </IconButton>
        </div>
        <div>
          <IconButton aria-label="hover" className={classes.icon}>
            {hover ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </div>
      </CardActions>
      <Collapse in={hover} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography align="left" variant="body2" component="p">
            {message.message}
          </Typography>
          <Typography component="p" className={classes.email}>
            {message.email}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    messageId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    avatar: PropTypes.string
  })
};

export default Message;
