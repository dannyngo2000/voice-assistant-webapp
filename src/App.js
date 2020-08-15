import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import DisplayCard from "./component/DisplayCard";
import useStyles from "./style";
import wordsToNumbers from "words-to-numbers";
import getToken from "./util/getToken";
require("dotenv").config();
const alanKey = process.env.REACT_APP_ALAN_KEY;
var savedTracks = [];
var savedArtists = [];
function App() {
  const [newArticle, setNewArticle] = useState([]);

  //New state for tracks from spotify
  const [newTrack, setNewTrack] = useState([]);
  //New state for artists from spotify
  const [newArtist, setNewArtist] = useState([]);
  //New State for active Article that we are reading
  const [activeArticle, setActiveArticle] = useState(-1);

  //New state for horoscope reading
  const [newReading, setNewReading] = useState({});

  //Using useStyles hook/ custom hook
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({
        command,
        articles,
        number,
        songName,
        artistName,
        horoscopeName,
        findMonthlyHoroscope,
        findYearlyHoroscope,
      }) => {
        switch (command) {
          case "newHeadlines":
            setNewArticle(articles);
            setNewTrack([]);
            setNewArtist([]);
            setActiveArticle(-1);
            setNewReading([]);
            break;

          case "highlight":
            //Each time we call highlight command, it will increment by 1
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
            break;

          case "openArticle":
            //Converting from text to number
            console.log(number);
            const parseNumber =
              number.length > 2
                ? wordsToNumbers(number, { fuzzy: true })
                : number;
            //Array starts from 0
            const article = articles[parseNumber - 1];
            if (parseNumber > 20) {
              //Issue voice from client-side
              alanBtn().playText("Please try that again");
            } else if (article) {
              window.open(article.url, "_blank");
              alanBtn().playText(`Opening article number ${number} `);
            }
            break;

          //Finding song given the name from AlanAI editor
          case "findSong":
            const getSongName = async () => {
              const token = await getToken();
              const result = await fetch(
                `https://api.spotify.com/v1/search?q=${songName}&type=track&limit=10`,
                {
                  method: "GET",
                  headers: {
                    Authorization: "Bearer " + token,
                  },
                }
              );
              var song = await result.json();
              var items = song.tracks.items;
              savedTracks = items;
              setNewArticle([]);
              setNewReading([]);
              setNewArtist([]);
              setActiveArticle(-1);
              setNewTrack(items);
            };
            getSongName();
            break;

          //Finding artist based on artist's name from AlanAi text editor
          case "findArtist":
            const getArtistName = async () => {
              console.log(artistName);
              const token = await getToken();
              const result = await fetch(
                `https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=1`,
                {
                  method: "GET",
                  headers: {
                    Authorization: "Bearer " + token,
                  },
                }
              );
              var artist = await result.json();
              var items = artist.artists.items;
              setNewArtist(items);
              setNewTrack([]);
              setNewArticle([]);
              setNewReading([]);
              setActiveArticle(-1);
              savedArtists = items;
            };
            getArtistName();
            break;

          //Finding daily horoscope
          case "findDailyHoroscope":
            const getDailyHoroscope = async () => {
              const result = await fetch(
                `https://cors-anywhere.herokuapp.com/http://horoscope-api.herokuapp.com/horoscope/today/${horoscopeName}`
              );
              var reading = await result.json();
              //Setting an temp array to store the reading in
              var tempArray = [];
              tempArray.push(reading);
              console.log(tempArray);
              setNewReading(tempArray);
              setNewTrack([]);
              setNewArticle([]);
              setNewArtist([]);
              setActiveArticle(-1);
            };

            getDailyHoroscope();
            break;
          //Finding monthly horoscope
          case "findMonthlyHoroscope":
            const getMonthlyHoroscope = async () => {
              const result = await fetch(
                `https://cors-anywhere.herokuapp.com/http://horoscope-api.herokuapp.com/horoscope/month/${horoscopeName}`
              );
              var reading = await result.json();
              //Setting an temp array to store the reading in
              var tempArray = [];
              tempArray.push(reading);
              console.log(tempArray);
              setNewReading(tempArray);
              setNewTrack([]);
              setNewArticle([]);
              setNewArtist([]);
              setActiveArticle(-1);
            };

            getMonthlyHoroscope();
            break;

          //Finding Yearly Horoscope
          case "findYearlyHoroscope":
            const getYearlyHoroscope = async () => {
              const result = await fetch(
                `https://cors-anywhere.herokuapp.com/http://horoscope-api.herokuapp.com/horoscope/year/${horoscopeName}`
              );
              var reading = await result.json();
              //Setting an temp array to store the reading in
              var tempArray = [];
              tempArray.push(reading);
              console.log(tempArray);
              setNewReading(tempArray);
              setNewTrack([]);
              setNewArticle([]);
              setNewArtist([]);
              setActiveArticle(-1);
            };

            getYearlyHoroscope();
            break;

          //Opening track number from the list
          case "openTrack":
            var getNumber =
              number.length > 2
                ? wordsToNumbers(number, { fuzzy: true })
                : number;
            //Array starts from 0
            var savedTrack = savedTracks[getNumber - 1];
            if (getNumber > 20) {
              //Issue voice from client-side
              alanBtn().playText("Please try that again");
            } else if (newTrack) {
              window.open(savedTrack.external_urls.spotify, "_blank");
              alanBtn().playText(`Opening track number ${getNumber}`);
            }
            break;

          //Opening artist number from the display
          case "openArtist":
            var artistNumber =
              number.length > 2
                ? wordsToNumbers(number, { fuzzy: true })
                : number;
            //Array starts from 0
            var artistList = savedArtists[artistNumber - 1];
            if (getNumber > 20) {
              //Issue voice from client-side
              alanBtn().playText("Please try that again");
            } else if (newArtist) {
              window.open(artistList.external_urls.spotify, "_blank");
              alanBtn().playText(`Opening track number ${artistNumber}`);
            }
            break;
          default:
            alanBtn().playText("Please try that again");
        }
      },
    });
  }, []);
  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://alan.app/voice/images/previews/preview.jpg"
          className={classes.alanLogo}
          alt="alan logo"
        ></img>
      </div>
      <DisplayCard
        articles={newArticle}
        activeArticle={activeArticle}
        newTracks={newTrack}
        newArtists={newArtist}
        newReadings={newReading}
      ></DisplayCard>
    </div>
  );
}

export default App;
