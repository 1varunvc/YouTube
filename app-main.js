// This is a nodeJs-expressJs application.
const express = require("express");

// https to fetch data from end-point
const https = require("https");

// body-parser to read client's submitted queryValue
const bodyParser = require("body-parser");

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
  return (removeFromThis = removeFromThis.filter(val => !compareToThis.includes(val)));
}

// Declaring variables for the function 'httpsYtGetFunc'
let apiKey = "";
let urlOfYtGetFunc = "";
let resultOfYtGetFunc = "";
let extractedResultOfYtGetFunc = [];

// AIzaSyCj80kCJOCJw0VzqkYqjfnQ9Kyxu-MbxMI
// This function GETs data, parses it, pushes required values in an array.
function httpsYtGetFunc(queryOfYtGetFunc, callback) {

  apiKey = "AIzaSyCj80kCJOCJw0VzqkYqjfnQ9Kyxu-MbxMI"
  urlOfYtGetFunc = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&part=snippet&q=" + queryOfYtGetFunc + "&maxResults=4&order=relevance&type=video";

  // GETting data and storing it in chunks.
  https.get(urlOfYtGetFunc, (response) => {
    const chunks = []
    response.on('data', (d) => {
      chunks.push(d)
    })

    // Parsing the chunks
    response.on('end', () => {
      resultOfYtGetFunc = JSON.parse((Buffer.concat(chunks).toString()))
      // console.log(resultOfYtGetFunc)

      // Extracting useful data, and allocating it.
      for (i = 0; i < (resultOfYtGetFunc.items).length; i++) {
        extractedResultOfYtGetFunc[i] = resultOfYtGetFunc.items[i].id.videoId;
        // console.log(extractedResultOfYtGetFunc);
      }
      callback (null, extractedResultOfYtGetFunc); // move the callback here
    })
  })
  // callback (null, extractedResultOfYtGetFunc);
}

app.post("/", function(req, res) {

  // Accessing the queryValue user submitted in index.html.
  query = req.body.queryValue;

  // Fetcing top results related to user's query and putting them in the array.
  ytQueryAppJs = httpsYtGetFunc(query, (err, ytQueryAppJs) => {
    console.log("ytQueryAppJs:");
    console.log(ytQueryAppJs);
  });

  // // Fetching 'cover' songs related to user's query and putting them in the array.
  // if (query.includes("cover") == true) {
  //   ytCoverAppJs = httpsYtGetFunc(query);
  //   console.log("ytCoverAppJs:");
  //   console.log(ytCoverAppJs);
  //
  //   // Removing redundant values.
  //   ytCoverUniqueAppJs = compareAndRemove(ytCoverAppJs, ytQueryAppJs);
  //   console.log("ytCoverUniqueAppJs:");
  //   console.log(ytCoverUniqueAppJs);
  // } else {
  //   ytCoverAppJs = httpsYtGetFunc(query + " cover");
  //   console.log("ytCoverAppJs:");
  //   console.log(ytCoverAppJs);
  //
  //   // Removing redundant values.
  //   ytCoverUniqueAppJs = compareAndRemove(ytCoverAppJs, ytQueryAppJs);
  //   console.log("ytCoverUniqueAppJs:");
  //   console.log(ytCoverUniqueAppJs);
  // }
  //
  // // Fetching 'live performances' related to user's query and putting them in the array.
  // if (query.includes("live") == true) {
  //   ytLiveAppJs = httpsYtGetFunc(query);
  //   console.log("ytLiveAppJs:");
  //   console.log(ytLiveAppJs);
  //
  //   // Removing redundant values.
  //   ytLiveUniqueAppJs = compareAndRemove(ytLiveAppJs, ytQueryAppJs);
  //   ytLiveUniqueAppJs = compareAndRemove(ytLiveAppJs, ytCoverAppJs);
  //   console.log("ytLiveUniqueAppJs:");
  //   console.log(ytLiveUniqueAppJs);
  // } else {
  //   ytLiveAppJs = httpsYtGetFunc(query + " live");
  //   console.log("ytLiveAppJs:");
  //   console.log(ytLiveAppJs);
  //
  //   // Removing redundant values.
  //   ytLiveUniqueAppJs = compareAndRemove(ytLiveAppJs, ytQueryAppJs);
  //   ytLiveUniqueAppJs = compareAndRemove(ytLiveAppJs, ytCoverAppJs);
  //   console.log("ytLiveUniqueAppJs:");
  //   console.log(ytLiveUniqueAppJs);
  // }

  // The 'results' named EJS file is rendered and fed in response. The 'required' data is passed into it using the following variable(s).
  // res.render("results", {
  //   ytQueryEjs: ytQueryAppJs,
  //   ytCoverUniqueEjs: ytCoverUniqueAppJs,
  //   ytLiveUniqueEjs: ytLiveUniqueAppJs
  // });
  // console.log("Value to be sent for rendering: ");
  // console.log(ytQueryAppJs);
  // console.log(ytCoverUniqueEjs);
  // console.log(ytLiveUniqueEjs);

  // // Emptying all the arrays.
  // ytQueryAppJs.length = 0;
  //
  // ytCoverAppJs.length = 0;
  // ytCoverUniqueAppJs.length = 0;
  //
  // ytLiveAppJs.length = 0;
  // ytLiveUniqueAppJs.length = 0;

  //     // Fetching cover results.
  //     if (query.includes("cover") == true) {
  //       url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&part=snippet&q=" + query + "&maxResults=8&order=relevance&type=video";
  //
  //       https.get(url, (response) => {
  //         const chunks = []
  //         response.on('data', (d) => {
  //           chunks.push(d)
  //         })
  //
  //         response.on('end', () => {
  //           var ytCoverResult = JSON.parse((Buffer.concat(chunks).toString()))
  //           // console.log(ytCoverResult)
  //
  //           // Extracting useful data, and allocating it.
  //           for (i = 0; i < (ytCoverResult.items).length; i++) {
  //             ytCoverAppJs[i] = ytCoverResult.items[i].id.videoId;
  //           }
  //           console.log("ytCoverAppJs:");
  //           console.log(ytCoverAppJs);
  //
  //           ytCoverUniqueAppJs = compareAndRemove(ytCoverAppJs, ytQueryAppJs);
  //           console.log("ytCoverUniqueAppJs:");
  //           console.log(ytCoverUniqueAppJs);
  //
  //
  //         });
  //       });
  //     } else {
  //       url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&part=snippet&q=" + query + "cover" + "&maxResults=8&order=relevance&type=video";
  //
  //       https.get(url, (response) => {
  //         const chunks = []
  //         response.on('data', (d) => {
  //           chunks.push(d)
  //         })
  //
  //         response.on('end', () => {
  //           var ytCoverResult = JSON.parse((Buffer.concat(chunks).toString()))
  //           // console.log(ytCoverResult)
  //
  //           // Extracting useful data, and allocating it.
  //           for (i = 0; i < (ytCoverResult.items).length; i++) {
  //             ytCoverAppJs[i] = ytCoverResult.items[i].id.videoId;
  //           }
  //           console.log("ytCoverAppJs:");
  //           console.log(ytCoverAppJs);
  //
  //           ytCoverUniqueAppJs = compareAndRemove(ytCoverAppJs, ytQueryAppJs);
  //           console.log("ytCoverUniqueAppJs:");
  //           console.log(ytCoverUniqueAppJs);
  //         });
  //       });
  //     }
  //   });
  // });
});
