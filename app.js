// This is a nodeJs-expressJs application.
const express = require("express");

// https to fetch data from end-point
const https = require("https");

// body-parser to read client's submitted queryValue
const bodyParser = require("body-parser");

// This fetches the data from API endpoint and parses it to JSON.
const axios = require("axios");

// To link the keys.
const keys = require("./config/keys");

// The library to encode/decode weird text returned from API endpoint.
const he = require("he");

// This app constant is created to be able to access the methods available in 'express' package.
const app = express();

// Starting the server
app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});

// 'urlencoded' helps access html data. Other data formats could be JSON etc.
// body-parser required as to exclusively define "extended: true" although this is no use to us.
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

// ejs view engine has been used to use app.js variables into the output ejs file.
app.set('view engine', 'ejs');

// Variables to store the data fetched from API endpoint.
let i = 0;

let query = "";

let ytQueryResult = "";
let ytCoverResult = "";
let ytLiveResult = "";

let ytQueryAppJs = [];

let ytCoverAppJs = [];
let ytCoverUniqueAppJs = [];

let ytLiveAppJs = [];
let ytLiveUniqueAppJs = [];

// The page to load when the browser (client) makes request to GET something from the server on "/", i.e., from the homepage.
// This GET request is made as soon as the homepage url is entered in the address bar od browser, automatically.
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// https://stackoverflow.com/a/14930567/14597561
function compareAndRemove(removeFromThis, compareToThis) {
  removeFromThis = removeFromThis.filter(val => !compareToThis.includes(val));
  return (removeFromThis);
}

// Declaring variables for the function 'ytAxiosGetFunc'
let apiKey = "";
let urlOfYtAxiosGetFunc = "";

// let ytResponse = "";             // Declare these two locally.
// let ytExtractedResult = [];


// This function GETs data, parses it, allocates required values in an array.
async function ytAxiosGetFunc(queryOfYtAxiosGetFunc, maxResultsOfYtAxiosGetFunc) {

  let ytExtractedResult = [];
  let ytVideoId = [];
  let ytVideoThumb = [];
  let ytVideoTitle = [];
  let ytVideoChannel = [];
  urlOfYtAxiosGetFunc = "https://www.googleapis.com/youtube/v3/search?key=" + keys.google.apiKey[0] + "&part=snippet&order=relevance&type=video&videoEmbeddable=true";

  try {
    let ytResponse = await axios({
      url: urlOfYtAxiosGetFunc,
      method: "get",
      params: {
        q: queryOfYtAxiosGetFunc,
        maxResults: maxResultsOfYtAxiosGetFunc
      }
    })

    let ytResult = ytResponse.data;

    for (i = 0; i < (ytResult.items).length; i++) {
      ytVideoId[i] = ytResult.items[i].id.videoId;
      ytVideoThumb[i] = ytResult.items[i].snippet.thumbnails.default.url;
      ytVideoTitle[i] = he.decode(ytResult.items[i].snippet.title);
      ytVideoChannel[i] = he.decode(ytResult.items[i].snippet.channelTitle);
    }

    return {
      id: ytVideoId,
      thumb: ytVideoThumb,
      title: ytVideoTitle,
      channel: ytVideoChannel
    };
  } catch (e) {
    console.log(e);
  }
}

app.post("/", async function(req, res) {

  // Accessing the queryValue user submitted in index.html.
  query = req.body.queryValue;

  // Fetcing top results related to user's query and putting them in the array.
  ytQueryAppJs = await ytAxiosGetFunc(query, 4);
  console.log("ytQueryAppJs:");
  console.log(ytQueryAppJs);

  // Fetching 'cover' songs related to user's query and putting them in the array.
  if (query.includes("cover") == true) {
    ytCoverAppJs = await ytAxiosGetFunc(query, 8);
    console.log("ytCoverAppJs:");
    console.log(ytCoverAppJs);

    // Removing redundant values.
    ytCoverUniqueAppJs.id = compareAndRemove(ytCoverAppJs.id, ytQueryAppJs.id);
    ytCoverUniqueAppJs.thumb = compareAndRemove(ytCoverAppJs.thumb, ytQueryAppJs.thumb);
    ytCoverUniqueAppJs.title = compareAndRemove(ytCoverAppJs.title, ytQueryAppJs.title);
    ytCoverUniqueAppJs.channel = compareAndRemove(ytCoverAppJs.channel, ytQueryAppJs.channel);

    console.log("ytCoverUniqueAppJs:");
    console.log(ytCoverUniqueAppJs);
  } else if (query.includes("live") == true) {
    ytCoverAppJs = await ytAxiosGetFunc(query.replace("live", " cover "), 4);
    console.log("ytCoverAppJs:");
    console.log(ytCoverAppJs);

    // Removing redundant values.
    ytCoverUniqueAppJs.id = compareAndRemove(ytCoverAppJs.id, ytQueryAppJs.id);
    ytCoverUniqueAppJs.thumb = compareAndRemove(ytCoverAppJs.thumb, ytQueryAppJs.thumb);
    ytCoverUniqueAppJs.title = compareAndRemove(ytCoverAppJs.title, ytQueryAppJs.title);
    ytCoverUniqueAppJs.channel = compareAndRemove(ytCoverAppJs.channel, ytQueryAppJs.channel);

    console.log("ytCoverUniqueAppJs:");
    console.log(ytCoverUniqueAppJs);
  } else {
    ytCoverAppJs = await ytAxiosGetFunc(query + " cover", 4);
    console.log("ytCoverAppJs:");
    console.log(ytCoverAppJs);

    // Removing redundant values.
    ytCoverUniqueAppJs.id = compareAndRemove(ytCoverAppJs.id, ytQueryAppJs.id);
    ytCoverUniqueAppJs.thumb = compareAndRemove(ytCoverAppJs.thumb, ytQueryAppJs.thumb);
    ytCoverUniqueAppJs.title = compareAndRemove(ytCoverAppJs.title, ytQueryAppJs.title);
    ytCoverUniqueAppJs.channel = compareAndRemove(ytCoverAppJs.channel, ytQueryAppJs.channel);

    console.log("ytCoverUniqueAppJs:");
    console.log(ytCoverUniqueAppJs);
  }

  // Fetching 'live performances' related to user's query and putting them in the array.
  if (query.includes("live") == true) {
    ytLiveAppJs = await ytAxiosGetFunc(query, 8);
    console.log("ytLiveAppJs:");
    console.log(ytLiveAppJs);

    // Removing redundant values.
    ytLiveUniqueAppJs.id = compareAndRemove(ytLiveAppJs.id, (ytQueryAppJs.id).concat(ytCoverUniqueAppJs.id));
    ytLiveUniqueAppJs.thumb = compareAndRemove(ytLiveAppJs.thumb, (ytQueryAppJs.thumb).concat(ytCoverUniqueAppJs.thumb));
    ytLiveUniqueAppJs.title = compareAndRemove(ytLiveAppJs.title, (ytQueryAppJs.title).concat(ytCoverUniqueAppJs.title));
    ytLiveUniqueAppJs.channel = compareAndRemove(ytLiveAppJs.channel, (ytQueryAppJs.channel).concat(ytCoverUniqueAppJs.channel));

    console.log("ytLiveUniqueAppJs:");
    console.log(ytLiveUniqueAppJs);
  } else if (query.includes("cover") == true) {
    ytLiveAppJs = await ytAxiosGetFunc(query.replace("cover", " live "), 4);
    console.log("ytLiveAppJs:");
    console.log(ytLiveAppJs);

    // Removing redundant values.
    ytLiveUniqueAppJs.id = compareAndRemove(ytLiveAppJs.id, (ytQueryAppJs.id).concat(ytCoverUniqueAppJs.id));
    ytLiveUniqueAppJs.thumb = compareAndRemove(ytLiveAppJs.thumb, (ytQueryAppJs.thumb).concat(ytCoverUniqueAppJs.thumb));
    ytLiveUniqueAppJs.title = compareAndRemove(ytLiveAppJs.title, (ytQueryAppJs.title).concat(ytCoverUniqueAppJs.title));
    ytLiveUniqueAppJs.channel = compareAndRemove(ytLiveAppJs.channel, (ytQueryAppJs.channel).concat(ytCoverUniqueAppJs.channel));

    console.log("ytLiveUniqueAppJs:");
    console.log(ytLiveUniqueAppJs);
  } else {
    ytLiveAppJs = await ytAxiosGetFunc(query + " live", 4);
    console.log("ytLiveAppJs:");
    console.log(ytLiveAppJs);

    // Removing redundant values.
    ytLiveUniqueAppJs.id = compareAndRemove(ytLiveAppJs.id, (ytQueryAppJs.id).concat(ytCoverUniqueAppJs.id));
    ytLiveUniqueAppJs.thumb = compareAndRemove(ytLiveAppJs.thumb, (ytQueryAppJs.thumb).concat(ytCoverUniqueAppJs.thumb));
    ytLiveUniqueAppJs.title = compareAndRemove(ytLiveAppJs.title, (ytQueryAppJs.title).concat(ytCoverUniqueAppJs.title));
    ytLiveUniqueAppJs.channel = compareAndRemove(ytLiveAppJs.channel, (ytQueryAppJs.channel).concat(ytCoverUniqueAppJs.channel));

    console.log("ytLiveUniqueAppJs:");
    console.log(ytLiveUniqueAppJs);
  }

  // The 'results' named EJS file is rendered and fed in response. The 'required' data is passed into it using the following variable(s).
  res.render("results", {
    userEjs: req.user,
    queryEjs: query,
    ytQueryEjs: ytQueryAppJs,
    ytCoverUniqueEjs: ytCoverUniqueAppJs,
    ytLiveUniqueEjs: ytLiveUniqueAppJs
  });
  console.log("Values to be sent for rendering: ");
  console.log("ytQueryAppJs");
  console.log(ytQueryAppJs);
  console.log("ytCoverUniqueAppJs");
  console.log(ytCoverUniqueAppJs);
  console.log("ytLiveUniqueAppJs");
  console.log(ytLiveUniqueAppJs);

  // Emptying all the arrays.
  ytQueryAppJs.length = 0;

  ytCoverAppJs.length = 0;
  ytCoverUniqueAppJs.length = 0;

  ytLiveAppJs.length = 0;
  ytLiveUniqueAppJs.length = 0;
});
