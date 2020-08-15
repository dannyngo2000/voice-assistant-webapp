const axios = require("axios");

var newsAPIURL = `https://newsapi.org/v2/top-headlines?apiKey=bf141e86ea8248dd8d71d71be3575118&sources=bbc-news`;

var saveArticle = [];

axios.get(newsAPIURL).then((res) => {
  const articles = res.data.articles;
  saveArticle = articles;
});
console.log(saveArticle);
