const express = require("express");

// testing
// const connection = require("../config/connection.js");

const router = express.Router();

const futbol = require("../models/futbol");

router.get("/home", function (req, res) {
  res.render("home");
});

router.get("/roster", function (req, res) {
  res.render("roster");
});

router.get("/score", function (req, res) {
  res.render("score");
});

router.post("/api/teams", function (req, res) {
  futbol.create(
    ["Team_1", "Team_2", "Free_Agent", "Roster_name"],

    [
      [req.body.team1],
      [req.body.team2],
      [req.body.freeAgent],
      [req.body.rosterName],
    ],

    function (res) {
      console.log(res);
    }
  );
});

router.get("/api/teams/:Roster_name" , function (req, res) {
  futbol.recieveData(
    ["Team_1",
    "Team_2",
    "Free_Agent",
    "Roster_name",
    "teams"],
    // req.body.teamName,
    [req.params.Roster_name],
    function (result) {
      
      // const thePackage = {

      //   returnInfo: result

      // };
      
      // if (err) {
      //   return res.status(500).end();
      // };
      
      
      // console.log(thePackage);
      res.json(result);
    }
  
  );
});

module.exports = router;
