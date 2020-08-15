import React from "react";
import useStyles from "./style";
import classNames from "classnames";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";

function TrackCard({
  index,
  newTrack: { name, album, artists, external_urls },
}) {
  const classes = useStyles();

  return (
    <Card className={classNames(classes.card)}>
      <CardActionArea href={external_urls.spotify} target="_blank">
        <CardMedia
          className={classes.media}
          image={album.images[0].url || "./spotifyImage.png"}
        >
          {" "}
        </CardMedia>
        <div className={classes.details}>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
            component="h2"
          >
            {"Release Date: " + new Date(album.release_date).toDateString()}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="h2">
            {"By "}
            {artists[0].name}
          </Typography>
        </div>

        <Typography gutterBottom variant="h6">
          {name}
        </Typography>
        <CardMedia
          className={classes.spotifyMedia}
          image={require("./spotifyImage.png")}
        ></CardMedia>
        <CardActions className={classes.cardActions}>
          <Typography variant="h5" color="textSecondary">
            {" "}
            {index + 1}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default TrackCard;
