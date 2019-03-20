const jwt = require("jsonwebtoken");
const tokenSetting = require("./../config/token");

module.exports = function () {
  return function (req, res, next) {
    let tokenValue = req.headers.authorization.split(" ")[1];

    if (tokenValue === undefined || tokenValue === "") {
      res.send({ status: 401, authenticated: false, message: "authentication failed" });
    } else {
      jwt.verify(tokenValue, tokenSetting.jwtSecret, function (err, decoded) {
        if (err) {
          res.send({ status: 500, authenticated: false, message: "Token verification failed" });
        }
        //console.log(`JWT data is :---->  ${JSON.stringify(decoded)}`);
        req.teamid = decoded.user.TeamId;
        next();
      });
    }
  };
};