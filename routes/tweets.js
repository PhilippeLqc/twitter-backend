var express = require("express");
var router = express.Router();

require("../models/connection");
const Tweet = require("../models/tweets");
const User = require("../models/users");

const uid2 = require("uid2");
const bcrypt = require("bcrypt");

// Add a new tweet
router.post("/add", (req, res) => {
  User.findOne({ token: req.body.token }).then((data) => {

    console.log(data)

    const newTweet = new Tweet({
      date: req.body.date,
      message: req.body.message,
      user: data._id
    })

    newTweet.save().then(newDoc => {
        res.json({ result: true});
      });

  });
});

// Find all the tweets

router.get("/getTweets", (req, res) => {

    Tweet.find()
    .populate('user')
    .then(data => {
        console.log(data);
        res.json({ result: true})
      });
})


module.exports = router;
