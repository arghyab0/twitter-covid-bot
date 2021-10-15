# Twitter Retweet Bot

Retweets the latest tweet tagged with _@KolkataCOVIDbot_ hashtag. Attempts to retweet once every minute.
You can always change the retweet parameter and frequency to fit your needs.

## 🐦 Set up a Twitter App

- Create a Twitter App on Twitter Developers : [https://apps.twitter.com/app/new ](https://apps.twitter.com/app/new).

- Next you'll see a screen with a _Details_ tab. Setup the App and Application Type, choose _"Read and Write"_.

## 🚀 Run Locally

Clone the project

```bash
  git clone https://github.com/arghyab0/twitter-covid-bot.git
```

Go to the project directory

```bash
  cd twitter-covid-bot
```

Install dependencies

```bash
  npm install
```

Go to the _Keys and Access Tokens_ tab in your Twitter App dashboard and add the following keys to the **config.js** file.

```js
module.exports = {
  consumer_key: "<API key here>",
  consumer_secret: "<API secret key here>",
  access_token: "<Access token here>",
  access_token_secret: "<Access token secret here>",
};
```

Start the bot

```bash
  npm run start
```

Expect a success message in your console!

## 🌐 Deploy
