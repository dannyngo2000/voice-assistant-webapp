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
//Card action: clickable part
function NewsCard({
  index,
  article: { description, publishedAt, source, title, url, urlToImage },
  activeArticle,
}) {
  const classes = useStyles();

  return (
    <Card
      className={classNames(
        classes.card,
        activeArticle === index ? classes.activeCard : null
      )}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "./png-clipart-logo-newspaper-journalist-others-miscellaneous-company-thumbnail.png"
          }
        />
        <div className={classes.details}>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
            component="h2"
          >
            {new Date(publishedAt).toDateString()}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>

        <Typography gutterBottom variant="h5">
          {title}
        </Typography>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.cardActions}>
        <Typography variant="h5" color="textSecondary">
          {" "}
          {index + 1}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default NewsCard;
