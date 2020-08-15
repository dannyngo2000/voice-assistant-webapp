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
function ReadingCard({
  newReading: { date, horoscope, sunsign, month, year },
}) {
  const classes = useStyles();
  var dateDisplay = "";
  if (!month && !year) {
    dateDisplay = date;
  } else if (!date && !year) {
    dateDisplay = month;
  } else if (!month && !date) {
    dateDisplay = year;
  }
  var sign = sunsign.toLowerCase();
  var signImage = "";
  switch (sign) {
    case "libra":
      signImage = "Libra.jpg";
      break;

    case "aquarius":
      signImage = "Aquarius.jpg";
      break;

    case "aries":
      signImage = "Aries.jpg";
      break;

    case "cancer":
      signImage = "Cancer.png";
      break;
    case "capricon":
      signImage = "Capricon.jpg";
      break;
    case "gemini":
      signImage = "Gemini.jpeg";
      break;

    case "Leo":
      signImage = "Leo.jpg";
      break;
    case "pisces":
      signImage = "Pisces.jpg";
      break;
    case "sagittarius":
      signImage = "Sagittarius.jpg";
      break;

    case "scorpio":
      signImage = "Scorpio.jpg";
      break;

    case "taurus":
      signImage = "Taurus.jpg";
      break;

    case "virgo":
      signImage = "Virgo.jpg";
      break;
    default:
      break;
  }

  return (
    <Card className={classNames(classes.card)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`./${signImage}`)}
        ></CardMedia>
        <div className={classes.details}>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
            component="h2"
          >
            {"Date:        " + dateDisplay}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
            component="h2"
          >
            {" "}
            <bold>{horoscope}</bold>{" "}
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default ReadingCard;
