const express = require("express");

const router = express.Router();

const futbol = require("../models/futbol")

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

  
  
  futbol.create([

        "Team_1"
        // "Team_1", "Team_2", "Free_Agent" 
    ],

     [req.body.team1],
    // [req.body.team1, req.body.team2, req.body.freeAgent],
    // [[req.body.team1], [req.body.team2], [req.body.freeAgent]],
    function(result) {
        
        // res.json({ id: result.insertId });
        console.log(result);

    });



});

router.post("/api/rosters", function (req, res) {
  futbol.create2([

      "roster_name" 
  ],

  [req.body.rosterName],
  function(result) {
      
      // res.json({ id: result.insertId });
      console.log(result);

  });



});

// Export routes for server.js to use.
module.exports = router;
