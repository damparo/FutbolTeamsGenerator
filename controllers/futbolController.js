const express = require("express");


// testing
const connection = require("../config/connection.js");

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

// router.get("/api/teams" , function (req, res) {
//   futbol.recieveData(
//     ["Team_1", "Team_2", "Free_Agent", "Roster_name"],
    

//   [
//     // [res.body.team1],
//     // [res.body.team2],
//     // [res.body.freeAgent],
//     // [req.body.nameToServer]
//     [req.body.nameToServer]
//   ],

//   function (res) {
//     console.log(res);
//   });

// });
router.get("/api/teams", function (req, res) {


  connection.query("SELECT Team_1, Team_2, Free_Agent, Roster_name FROM teams WHERE Roster_name = ?", [req.infoTeam], function (err, result) {
    if (err) {
      throw err;
    }

    console.log(req)
    // res.json(result);
  });

 

});




// Export routes for server.js to use.
module.exports = router;
