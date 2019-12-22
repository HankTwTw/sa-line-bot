'use strict'
var line = require("@line/bot-sdk")
var express = require("express")
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
  };

  const client = new line.Client(config);
  const app = express();
  
  // register a webhook handler with middleware
  // about the middleware, please refer to doc
  app.post('/callback', line.middleware(config), (req, res) => {
        console.log(config)
        console.log(process.env.PORT)
        console.log(req.body.events)
        Promise.all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
  });
  

  function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
      return Promise.resolve(null);
    }
    const echo = { type: 'text', text: "event.message.text" };

    return client.replyMessage(event.replyToken, echo);
  }
  

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
