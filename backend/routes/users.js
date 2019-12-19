const express = require("express");
const router = express.Router();
const User = require("../model/user");

const statusCode = require("../utils/statusCode");

const middle = require("../middlewares/jwt/middleJwt");
const middleVerify = middle.verify;
const middlePublish = middle.publish;

/* GET users listing. */
router.post("/signin/:userId", middleVerify, function(req, res, next) {
  // const { userId } = req.params;
  const { userId, password } = req.body;
  User.read(userId, password)
    .then(user => res.json(user))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
    });
});

router.post("/add", middlePublish, (req, res, next) => {
  const { userId, password } = req.body;

  User.create({ userId, password })
    .then(user => {
      user.data = req.body.token;
      res.json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
    });
});
module.exports = router;
