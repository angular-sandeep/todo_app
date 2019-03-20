const express = require("express");
const router = express.Router();
const authMiddleware = require('./../auth/authMiddleware');
const todoModel = require("./../model/todo");

const jwt = require("jsonwebtoken");
const tokenSetting = require("./../config/token");


router.use(authMiddleware());

/* creating new todo */
router.post("/create", (req, res) => {
  let teamid = req.teamid;

  let todo = {
    Todo: req.body.todo,
    TeamId: teamid
  }
  todoModel.create(todo, (err) => {
    if (err) {
      res.send({ status: 500, error: err });
      return;
    } else {
      res.send({ status: 200, message: "todo added"});
    }
  });
});

/* get all todos */
router.get("/", (req, res) => { 
  let teamid = req.teamid;

  todoModel.find({TeamId: teamid}, { _id: 1, Todo: 1},(err, todos) => {
    if (err) {
      res.send({ status: 500, error: err });
      return;
    } else {
      res.send({ status: 200, todos: todos });
    }
  });
});

/* get todo based on id */
router.get("/:id", (req, res) => {
  let teamid = req.teamid;
  let id = req.params.id;

  todoModel.findOne({$and: [{ _id: id }, { TeamId: teamid }]}, { _id:1, Todo:1 } ,(err, todo) => {
    if (err) {
      res.send({ status: 500, error: err });
      return;
    }
    if (todo) {
      res.send({ status: 200, data: todo });
    } else {
      res.send({ status: 404, message: "not found" });
    }
  });
});

/* update todo based on Id */
router.put("/:id", (req, res) => {
  let teamid = req.teamid;
  let id = req.params.id;

  let todo = {
    Todo: req.body.todo,
    UpdatedOn: Date.now()
  };

  todoModel.findOneAndUpdate({ _id: id }, todo,{ new: true },(err, todo) => {
    if (err) {
      res.send({ status: 500, error: err });
      return;
    } else {
      res.send({ status: 200, todo: {_id: todo._id,Todo: todo.Todo } });
    }
  });
});

/* delete user based on userId */
router.delete("/:id", (req, res) => {
  let teamid = req.teamid;
  let id = req.params.id;

  todoModel.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      res.send({ status: 500, error: err });
    }
    if (data.deletedCount)
      res.send({ status: 200, message: `data deleted successfully` });
    else
      res.send({ status: 404, message: `data not found for ${id}` });
  });
});

module.exports = router;
