// This is a nodeJs-expressJs application.
const express = require("express");

// https to fetch data from end-point
const https = require("https");

// body-parser to read client's submitted queryValue
const bodyParser = require("body-parser");


const axios = require("axios");

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

// ejs view engine has been used to use app.js variables into the output ejs file.
app.set('view engine', 'ejs');

// Variables to store the data fetched from API endpoint.
let i = 0;

let query = "";
let endpoint = "";

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
  apiKey = "AI...U"
  urlOfYtAxiosGetFunc = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&part=snippet&order=relevance&type=video";

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
      ytExtractedResult[i] = ytResult.items[i].id.videoId;
      // console.log(ytExtractedResult);
    }
    return (ytExtractedResult);

    // ytExtractedResult.length = 0;        // These two were updating ytQueryAppJs, everytime the function ran.
    // ytResponse.length = 0;
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
    ytCoverUniqueAppJs = compareAndRemove(ytCoverAppJs, ytQueryAppJs);

    console.log("ytCoverUniqueAppJs:");
    console.log(ytCoverUniqueAppJs);
  } else if (query.includes("live") == true) {
    ytCoverAppJs = await ytAxiosGetFunc(query.replace("live", " cover "), 8);
    console.log("ytCoverAppJs:");
    console.log(ytCoverAppJs);

    // Removing redundant values.
    ytCoverUniqueAppJs = compareAndRemove(ytCoverAppJs, ytQueryAppJs);

    console.log("ytCoverUniqueAppJs:");
    console.log(ytCoverUniqueAppJs);
  } else {
    ytCoverAppJs = await ytAxiosGetFunc(query + " cover ", 8);
    console.log("ytCoverAppJs:");
    console.log(ytCoverAppJs);

    // Removing redundant values.
    ytCoverUniqueAppJs = compareAndRemove(ytCoverAppJs, ytQueryAppJs);
    console.log("ytCoverUniqueAppJs:");
    console.log(ytCoverUniqueAppJs);
  }

  // Fetching 'live performances' related to user's query and putting them in the array.
  if (query.includes("live") == true) {
    ytLiveAppJs = await ytAxiosGetFunc(query, 8);
    console.log("ytLiveAppJs:");
    console.log(ytLiveAppJs);

    // Removing redundant values.
    ytLiveUniqueAppJs = compareAndRemove(ytLiveAppJs, ytQueryAppJs.concat(ytCoverUniqueAppJs));

    console.log("ytLiveUniqueAppJs:");
    console.log(ytLiveUniqueAppJs);
  } else if (query.includes("cover") == true) {
    ytLiveAppJs = await ytAxiosGetFunc(query.replace("cover", " live "), 8);
    console.log("ytLiveAppJs:");
    console.log(ytLiveAppJs);

    // Removing redundant values.
    ytLiveUniqueAppJs = compareAndRemove(ytLiveAppJs, ytQueryAppJs.concat(ytCoverUniqueAppJs));

    console.log("ytLiveUniqueAppJs:");
    console.log(ytLiveUniqueAppJs);
  } else {
    ytLiveAppJs = await ytAxiosGetFunc(query + " live ", 8);
    console.log("ytLiveAppJs:");
    console.log(ytLiveAppJs);

    // Removing redundant values.
    ytLiveUniqueAppJs = compareAndRemove(ytLiveAppJs, ytQueryAppJs.concat(ytCoverUniqueAppJs));

    console.log("ytLiveUniqueAppJs:");
    console.log(ytLiveUniqueAppJs);
  }

  // The 'results' named EJS file is rendered and fed in response. The 'required' data is passed into it using the following variable(s).
  res.render("results", {
    ytQueryEjs: ytQueryAppJs,
    ytCoverUniqueEjs: ytCoverUniqueAppJs,
    ytLiveUniqueEjs: ytLiveUniqueAppJs
  });
  console.log("Values to be sent for rendering: ");
  console.log(ytQueryAppJs);
  console.log(ytCoverUniqueAppJs);
  console.log(ytLiveUniqueAppJs);

  // Emptying all the arrays.
  ytQueryAppJs.length = 0;

  ytCoverAppJs.length = 0;
  ytCoverUniqueAppJs.length = 0;

  ytLiveAppJs.length = 0;
  ytLiveUniqueAppJs.length = 0;
});
