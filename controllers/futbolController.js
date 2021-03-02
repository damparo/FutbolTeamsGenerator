const express = require("express");

const router = express.Router();

const futbol = require("../models/futbol");

router.get("/", function (req, res) {
  res.render("login");
});

router.get("/home", function (req, res) {
  res.render("home");
});

router.get("/roster", function (req, res) {
  res.render("roster");
});

router.get("/thankyou", function (req, res) {
  res.render("thankyou");
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

router.get("/api/teams/:Roster_name", function (req, res) {
  futbol.recieveData(
    ["Team_1", "Team_2", "Free_Agent", "Roster_name", "teams"],
    [req.params.Roster_name],
    function (result) {
      res.json(result);
    }
  );
});

module.exports = router;
