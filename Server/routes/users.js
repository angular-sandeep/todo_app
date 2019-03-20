var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");

const tokenSetting = require("./../config/token");
const userModel = require("./../model/users");

/* creating new user */
router.post("/create", (req, res) => {

  // user data model
  let user = {
    UserName: req.body.UserName,
    Password: req.body.Password,
    TeamId: req.body.TeamId
  };

  userModel.create(user, (err) => {
    if (err) {
      res.send({
        status: 500,
        error: err
      });
    } else {
      res.send({
        status: 200,
        message: `user created successfully`
      });
    }
  });
});

/* login / authentication */
router.post("/auth", (req, res) => {

  console.log(req.user);
  
  // user credentials checking
  userModel.findOne({
    $and: [{
      UserName: req.body.UserName
    }, {
      Password: req.body.Password
    }]
  }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    if (data != undefined) {
      // JWT payload
      let user = {
        UserName: data.UserName,
        TeamId: data.TeamId
      };

      // preparing token
      var token = jwt.sign({
        user
      }, tokenSetting.jwtSecret, {
        expiresIn: 60 * 60
      });

      // sending token to client
      res.send({
        status: 200,
        data: {
          token: `Bearer ${token}`,
          UserName: data.UserName,
          teamId: data.TeamId
        }
      });
    } else {
      // sending "Unauthorized error" to client
      res.send({
        status: 401,
        message: "Unauthorized user"
      });
      res.end();
    }
  });
});

/* checking user exist or not */
router.post("/check", (req, res) => {
  console.log('called');

  userModel.findOne({
    UserName: req.body.UserName
  }).exec((err, user) => {
    if (err) {
      res.send({
        status: 500,
        error: err
      });
    }
    if (!user) {
      res.send({
        status: 404,
        message: `user is unique`
      });
    } else {
      res.send({
        status: 200,
        message: `user already exist`
      });
    }
  });
});
module.exports = router;