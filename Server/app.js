const express = require("express");
const bodyPasrer = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// setting auth- middleware
//const authMiddleware = require("./authMiddleware");

// router setting
var usersRouter = require("./routes/users");
var todoRouter = require("./routes/todo");

var app = express();

/* #region Mongoose Database connectivity logic */
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/TodoApp",
  { useNewUrlParser: true }
);
var dbConnect = mongoose.connect;
if (!dbConnect) {
  console.log("sorry db connection is not established");
  return;
}
/* #endregion */


/* #region middleware used in application */
app.use(cors());
app.use(bodyPasrer.urlencoded({ extended: false }));
app.use(bodyPasrer.json());
//app.use(authMiddleware());

// router setting
app.use("/api/user", usersRouter);
app.use("/api/todo", todoRouter);
/* #endregion */

// server started setting
app.listen(process.env.PORT || 8080, () => {
  console.log(`server started on port 8080`);
});
