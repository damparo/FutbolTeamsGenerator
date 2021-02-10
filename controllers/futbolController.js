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

  // req.body.clickRoster = req.params.clickRoster;
  
  // console.log(req.body.teamName);

  futbol.recieveData(
    ["Team_1",
    "Team_2",
    "Free_Agent",
    "Roster_name",
    "teams"],
    // req.body.teamName,
    [req.params.Roster_name],
    function (err, data) {
      if (err) {
        return res.status(500).end();
      };
        // const infoObject = {
        //   teamInfo: data 
        // }
      
      console.log(data);
      // res.json.toString(data);
    }
  );
});
// router.get("/api/teams", function (req, res) {
//   connection.query(
//     "SELECT Team_1, Team_2, Free_Agent, Roster_name FROM teams WHERE Roster_name = ?",
//     [req.infoTeam],
//     function (err, result) {
//       if (err) {
//         throw err;
//       }

//       console.log(result);
//       // res.json(result);
//     }
//   );
// });

// Export routes for server.js to use.
module.exports = router;
