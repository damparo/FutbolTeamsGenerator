const express = require("express");

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

    function (result) {
      console.log(result);
    }
  );
});

router.get("/api/teams", function (req, res) {
  futbol.recieveData(
    ["Team_1", "Team_2", "Free_Agent", "Roster_name"],

  [
    [res.body.team1],
    [res.body.team2],
    [res.body.freeAgent],
    [res.body.rosterName],
  ],

  function (res) {
    console.log(res);
  });

});




// Export routes for server.js to use.

router.get("/api/teams", function (req, res) {});

module.exports = router;
