const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Posts");
const requireLogin = require("../middleware/requireLogin");

// routes
// all the events api
router.get("/allevents", (req, res) => {
  Post.find()
    .then((events) => {
      res.json({ events });
    })
    .catch((err) => console.log(err));
});
// register a event
router.post("/register", requireLogin, (req, res) => {
  console.log(req.body);

  const { etitle, edescription, edate, etime } = req.body;
  if (!etitle || !edescription || !edate || !etime) {
    res.status(422).json({ error: "Please add all the required feild !" });
  }
  const post = new Post({
    etitle,
    edescription,
    edate,
    etime
  });
  post
    .save()
    .then((result) => {
      res.json({ event: result });
    })
    .catch((err) => console.log(err));
});
// update joins in events
router.put("/join", requireLogin, (req, res) => {
  const { eventId } = req.body;
  console.log(eventId);
  console.log(req.user._id);
  Post.findByIdAndUpdate(
    eventId,
    {
      $push: { ejoins: req.user._id },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});
router.put("/unjoin", requireLogin, (req, res) => {
  const { eventId } = req.body;
  Post.findByIdAndUpdate(
    eventId,
    {
      $pull: { joins: req.user._id },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
