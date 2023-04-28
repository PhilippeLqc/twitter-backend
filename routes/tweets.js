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
      user: req.body.user
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
       
        res.json(data)
      });
})

// delete a tweet

router.delete("/delete/:tweetId", (req, res) => {

  Tweet.deleteOne({_id: req.params.tweetId})
  .then(data => {
      res.json({message: true})
    });
})





module.exports = router;
