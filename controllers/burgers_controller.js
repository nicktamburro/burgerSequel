var express = require("express");
var sequelize = require("sequelize");

var router = express.Router();
//var db = require("../models");

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

module.exports = function(app){

// Create all our routes and set up logic within those routes where required.
//find out what dbPost was....
app.get("/", function(req, res) {
  burgers.burger.findAll({})
  .then(function(burger){
    res.json(burger);
  });
});

app.post("/", function(req, res) {
    burgers.burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
    })
    .then(function(burger) {
      res.json(burger);
    });
  });

app.put("/", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          burger_name: req.body.burger_name
        }
      })
    .then(function(burger) {
      res.json(burger);
    });
  });

app.delete("/", function(req, res) {
    burgers.burger.destroy({
      where: {
        burger_name: req.params.burger_name
      }
    })
    .then(function(burger) {
      res.json(burger);
    });
  });
  };

// Export routes for server.js to use.
//module.exports = router;
