import React from "react";
import NewsCard from "./NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./style";
import TrackCard from "./TrackCard/TrackCard";
import ArtistCard from "./ArtistCard/ArtistCard";
import ReadingCard from "./ReadingCard/ReadingCard";
const infoCards = [
  { color: "#ff8080", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#ff80ff",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "Relevant news about Smartphones",
  },
  {
    color: "#d699ff",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
  {
    color: "#00e600",
    title: "Song by Name",
    info: "Psycho, Gee, How You Like That, Fancy, Yes or Yes,...",
    text: "Find me How You Like That track",
  },
  {
    color: "#538cc6",
    title: "Artist by Name",
    info: "Blackpink, Red Velvet, TWICE, Girls Generation,....",
    text: "Find me Blackpink artist",
  },
  {
    color: "#77b300",
    title: "Daily-reading by Zodiac Signs",
    info: "Taurus, Libra, Leo, Virgo....",
    text: "What is the reading today for Taurus",
  },
  {
    color: "#b35900",
    title: "Month-reading by Zodiac Signs",
    info: "Taurus, Libra, Leo, Virgo....",
    text: "What is the reading this year for Taurus",
  },
  {
    color: "#809fff",
    title: "Year-reading by Zodiac Signs",
    info: "Taurus, Libra, Leo, Virgo....",
    text: "What is the reading this month for Taurus",
  },
];

const DisplayCard = ({
  articles,
  activeArticle,
  newTracks,
  newArtists,
  newReadings,
}) => {
  const classes = useStyles();

  if (
    !articles.length &&
    !newTracks.length &&
    !newArtists.length &&
    !newReadings.length
  ) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5" component="h5">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h6" component="h6">
                    <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6" component="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  if (articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <NewsCard
                index={i}
                article={article}
                activeArticle={activeArticle}
              />
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  } else if (newTracks.length) {
    console.log(newTracks);
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {newTracks.map((newTrack, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <TrackCard index={i} newTrack={newTrack} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  } else if (newReadings.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {newReadings.map((newReading, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <ReadingCard index={i} newReading={newReading} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  } else if (newArtists.length) {
    console.log(newArtists);
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {newArtists.map((newArtist, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <ArtistCard index={i} newArtist={newArtist} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
};

export default DisplayCard;
