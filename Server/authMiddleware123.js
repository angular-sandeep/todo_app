const userModel = require("./model/users");
const jwt = require("jsonwebtoken");
const tokenSetting = require("./config/token");

module.exports = function () {
  return function (req, res, next) {
    if (!(req.url == "/api/user/auth")) {
      let tokenValue = req.headers.authorization.split(" ")[1];

      if (tokenValue === undefined || tokenValue === "") {
        res.send({
          status: 401,
          authenticated: false,
          message: "authentication failed"
        });
      } else {
        jwt.verify(tokenValue, tokenSetting.jwtSecret, function (err, decoded) {
          if (err) {
            res.send({
              status: 500,
              authenticated: false,
              message: "Token verification failed"
            });
          }
          console.log(decoded);
          // continue
          next();
        });
      }
    } else {
      // reading username and password for request object
      let user = {
        UserName: req.body.UserName,
        Password: req.body.Password
      };

      // user credentials checking
      userModel.findOne({ $and: [{ UserName: req.body.UserName }, { Password: req.body.Password }] }, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        if (data != undefined) {
          // preparing token
          var token = jwt.sign({ user }, tokenSetting.jwtSecret, { expiresIn: 60*60 });
          
          // sending token to client
          res.send({
            status: 200,
            token: `Bearer ${token}`,
            teamId: data.TeamId
          });
        } else {
          // sending "Unauthorized error" to client
          res.statusCode = 401;
          res.send({
            status: res.statusCode,
            message: "Unauthorized user"
          });
          res.end();
        }
      });
    }
  };
};