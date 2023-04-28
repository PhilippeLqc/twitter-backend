var express = require("express");
var router = express.Router();

require("../models/connection");
const Hashtag = require("../models/hashtags");

// Add an # in bdd

router.post("/add", (req, res) => {
  Hashtag.findOne({ hashtag: req.body.hashtag }).then((data) => {
    console.log(data)
    if (data !== null) {
        console.log("pas else")
      Hashtag.updateOne(
        { hashtag: data.hashtag },
        { $addToSet: { tweets: req.body.tweetId } } // Utilisez l'opérateur $addToSet pour ajouter l'auteur dans le tableau des likes
      ).then((data) => {
        res.json({ data });
      });
    } else {
        console.log("else")
      const newHashtag = new Hashtag({
        hashtag: req.body.hashtag,
        tweets: req.body.tweetId,
      });

      newHashtag.save().then((newDoc) => {
        res.json({ newDoc });
      });
    }
  });
});


// Recupère tous les hashtags

router.get("/getHashtags", (req, res) => {
    Hashtag.find()
      .populate("tweets")
      .then((data) => {
        res.json(data);
      });
  });



module.exports = router;
