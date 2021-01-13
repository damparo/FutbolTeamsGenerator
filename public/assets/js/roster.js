// const { json } = require("express");

// Add player to player pool code with delete feature (does not delete from database)
let rosterField = [];
let oneForSql = [];
let twoForSql = [];
let freeForSql = [];


// savedTeam();
manyPlayers();

$("#roster-form").submit(function (event) {
  event.preventDefault();
  let rosterText = $("#roster-creation").val().trim().toLowerCase();

  rosterText.charAt(0).toUpperCase();
  rosterText.slice(1);

  nameRoster = rosterText.charAt(0).toUpperCase() + rosterText.slice(1);

  if (nameRoster === "") {
    return;
  }
  rosterField.push(nameRoster);
  $("#roster-creation").val("");
  $("#teamone-list").text("");
  $("#teamtwo-list").text("");
  $("#loneplayer").text("");
  manyPlayers();
});

$("#roster-list").click(function (event) {
  let element = event.target;
  if (element.matches("button") === true) {
    let index = element.parentElement.getAttribute("data-index");
    rosterField.splice(index, 1);
    manyPlayers();
  }
});

function manyPlayers() {
  $("#roster-list").text("");
  for (i = 0; i < rosterField.length; i++) {
    let playerBox = rosterField[i];
    let newLi = $("<li>");
    newLi.text(playerBox);
    newLi.attr("data-index", i);
    let nameBtn = $("<button>");
    nameBtn.addClass("btn");
    nameBtn.text("x");
    nameBtn.css("color", "red");
    newLi.append(nameBtn);
    $("#roster-list").append(newLi);
    localStorage.setItem("team", JSON.stringify(rosterField));
    0;
  }
  $("#player-count").text(rosterField.length);
}

//following code is to generate teams, sort players into teams and if necessary Free Agent

$("#randomteams").click(function () {
  let freeAgent = [];
  let oneTeam = rosterField.concat(freeAgent);

  function mix() {
    for (let i = oneTeam.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = oneTeam[i];
      oneTeam[i] = oneTeam[j];
      oneTeam[j] = temp;
    }
    return oneTeam;
  }

  mix();

  $("#teamone-list").text("");
  $("#teamtwo-list").text("");
  $("#loneplayer").text("");
  oneForSql = [];
  twoForSql = [];
  freeForSql = [];


  if (oneTeam.length % 2 !== 0) {
    let hmm = oneTeam.pop();
    freeAgent.push(hmm);
    $("#loneplayer").append(freeAgent);
    freeForSql.push(hmm);

    let twoTeams = oneTeam.length * 0.5;
    aTeam = oneTeam.slice(0, twoTeams);

    bTeam = oneTeam.slice(twoTeams);
  } else {
    let twoTeams = oneTeam.length * 0.5;
    aTeam = oneTeam.slice(0, twoTeams);

    bTeam = oneTeam.slice(twoTeams);
  }

  for (i = 0; i < aTeam.length; i++) {
    let playerBox = aTeam[i];
    let newLi = $("<li>");
    newLi.text(playerBox);
    $("#teamone-list").append(newLi);
    oneForSql.push(playerBox);
  }

  localStorage.setItem("aTeam", JSON.stringify(aTeam));

  for (i = 0; i < bTeam.length; i++) {
    let playerBox = bTeam[i];
    let newLi = $("<li>");
    newLi.text(playerBox);
    $("#teamtwo-list").append(newLi);
    twoForSql.push(playerBox);
  }

  localStorage.setItem("bTeam", JSON.stringify(bTeam));



  // console.log($("#teamtwo-list").text());
});

// console.log(bTeam);



// Send POST request to save teams in MySQL database
$("#saveteams").click(function (event) {
  event.preventDefault();
  console.log("button is working")



  console.log(oneForSql);
  console.log(twoForSql);
  console.log(freeForSql);
  

  const teamInfo = {
    rosterName: $("#roster-name").text(),
    team1: oneForSql,
    team2: twoForSql,
    freeAgent: freeForSql,
  };
  
  

  $.ajax("/api/teams", {
    type: "POST",
    data: teamInfo,
  }).then(function () {
    console.log("teams saved!");
  });





});
