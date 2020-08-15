import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "./style";
import classNames from "classnames";
import numeral from "numeral";
function ArtistCard({
  index,
  newArtist: { images, followers, external_urls, name, genres },
}) {
  const classes = useStyles();

  return (
    <Card className={classNames(classes.card)}>
      <CardActionArea href={external_urls.spotify} target="_blank">
        <CardMedia
          className={classes.media}
          image={images[0].url || "./spotifyImage.png"}
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
            {" "}
            <bold>{name}</bold>{" "}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {" "}
            Followers : {numeral(followers.total).format("0,0")}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {" "}
            Genre : {genres[0]}
          </Typography>
        </div>
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

export default ArtistCard;
