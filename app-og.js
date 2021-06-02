const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');

let i = 0;

let ytQueryResult = "";
let ytCoverResult = "";
let ytLiveResult = "";

let ytQueryAppJs = [];

let ytCoverAppJs = [];
let ytCoverUniqueAppJs = [];

let ytLiveAppJs = [];
let ytLiveUniqueAppJs = [];


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// https://stackoverflow.com/a/14930567/14597561
function compareAndRemove(removeFromThis, compareToThis) {
  return (removeFromThis = removeFromThis.filter(val => !compareToThis.includes(val)));
}

function httpsGetQuery() {

}

app.post("/", function(req, res) {
  var query = req.body.queryValue;
  const apiKey = "AIzaSyC5asO20CAohIW_wEkgJB0XHVH4bOZSN5U"
  let url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&part=snippet&q=" + query + "&maxResults=4&order=relevance&type=video";


  // Getting the data and parsing it.
  https.get(url, (response) => {
    const chunks = []
    response.on('data', (d) => {
      chunks.push(d)
    })

    response.on('end', () => {
      var ytQueryResult = JSON.parse((Buffer.concat(chunks).toString()))
      // console.log(ytQueryResult)

      // Extracting useful data, and allocating it.
      for (i = 0; i < (ytQueryResult.items).length; i++) {
        ytQueryAppJs[i] = ytQueryResult.items[i].id.videoId;

      }
      console.log("ytQueryAppJs:");
      console.log(ytQueryAppJs);

      // Fetching cover results.
      if (query.includes("cover") == true) {
        url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&part=snippet&q=" + query + "&maxResults=8&order=relevance&type=video";

        https.get(url, (response) => {
          const chunks = []
          response.on('data', (d) => {
            chunks.push(d)
          })

          response.on('end', () => {
            var ytCoverResult = JSON.parse((Buffer.concat(chunks).toString()))
            // console.log(ytCoverResult)

            // Extracting useful data, and allocating it.
            for (i = 0; i < (ytCoverResult.items).length; i++) {
              ytCoverAppJs[i] = ytCoverResult.items[i].id.videoId;
            }
            console.log("ytCoverAppJs:");
            console.log(ytCoverAppJs);

            ytCoverUniqueAppJs = compareAndRemove(ytCoverAppJs, ytQueryAppJs);
            console.log("ytCoverUniqueAppJs:");
            console.log(ytCoverUniqueAppJs);


          });
        });
      } else {
        url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&part=snippet&q=" + query + "cover" + "&maxResults=8&order=relevance&type=video";

        https.get(url, (response) => {
          const chunks = []
          response.on('data', (d) => {
            chunks.push(d)
          })

          response.on('end', () => {
            var ytCoverResult = JSON.parse((Buffer.concat(chunks).toString()))
            // console.log(ytCoverResult)

            // Extracting useful data, and allocating it.
            for (i = 0; i < (ytCoverResult.items).length; i++) {
              ytCoverAppJs[i] = ytCoverResult.items[i].id.videoId;
            }
            console.log("ytCoverAppJs:");
            console.log(ytCoverAppJs);

            ytCoverUniqueAppJs = compareAndRemove(ytCoverAppJs, ytQueryAppJs);
            console.log("ytCoverUniqueAppJs:");
            console.log(ytCoverUniqueAppJs);
          });
        });
      }
    });
  });
});

// res.render("results", {
//   iFrameVideoId0: videoId0
// });
// console.log("Rendered value to be sent: " + videoId0);
