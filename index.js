//twitter lib
const Twit = require("twit");

//config file
const twit = new Twit(require("./config.js"));

const handleSearch = {
  q: "@KolkataCOVIDbot",
  count: 50,
  result_type: "recent",
};

const retweetLatest = () => {
  twit.get("search/tweets", handleSearch, (error, data) => {
    console.log(error, data);
    if (!error) {
      let retweetId = data.statuses[0].id_str;
      twit.post("statuses/retweet/" + retweetId, {}, (error, response) => {
        if (response) {
          console.log("Success, your bot should have rt-ed something!");
        }

        if (error) {
          console.log("There was an error with twitter: ", error);
        }
      });
    } else {
      console.log("There was an error with your hashtag search: ", error);
    }
  });
};

retweetLatest();

// in milisecs; 1000 ms = 1 second, 1 sec * 60 = 1 min
setInterval(retweetLatest, 1000 * 60 * 1);

//server
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("ok");
});
server.listen(3000);
