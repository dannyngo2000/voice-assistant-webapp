require("dotenv").config();

const fetch = require("node-fetch");

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const getToken = async () => {
  var result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      //btoa: string base64
      Authorization:
        "Basic " +
        Buffer.from(clientID + ":" + clientSecret).toString("base64"),
    },
    body: "grant_type=client_credentials",
  }).catch((err) => console.log(err));

  //Getting data as json

  const data = await result.json();

  return data.access_token;
};

export default getToken;
