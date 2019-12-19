import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#f5f5f5",
    margin: "24px",
    padding: theme.spacing(2),
    boxShadow: "0 3px 6px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)",
    position: "relative"
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  cardText: {
    overflowWrap: "break-word",
    lineHeight: "1.43",
    height: "4.29em",
    margin: "0px 0px 4px",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  cardAction: {
    borderRadius: "8px"
  }
}));

function CustomCard(props) {
  const classes = useStyles();
  return (
    <Grid item xs={props.xs}>
      <Card className={classes.card} shadows={3}>
        <CardActionArea className={classes.cardAction}>
          <CardMedia
            component="img"
            alt="test"
            image={props.thumbnail}
            width={props.width > 960 ? "960px" : props.width}
            height={props.height}
          ></CardMedia>
          <CardContent>
            <Typography variant="body2" color="textPrimary" component="p">
              {props.createdAt}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {props.articlename}
            </Typography>
            <Typography
              className={classes.cardText}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {props.contents}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CustomCard;
