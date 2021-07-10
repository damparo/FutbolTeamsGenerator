// Add player to player pool code with delete feature (does not delete from database)
let rosterField = [];
let oneForSql = [];
let twoForSql = [];
let freeForSql = [];
let rosterTitle = [];
let cage = [];
$(".content1").hide();
$(".content2").hide();
$("#player-count").hide();
$("#numplayers").hide();
$("#title").hide();
$("#randomteams").hide();
$("#teamssaved").hide();
manyPlayers();

$("#roster-form").submit(function (event) {
  event.preventDefault();

  $("#messi").hide();
  $("#player-count").show();
  $("#numplayers").show();
  $("#title").show();
  $("#randomteams").show();

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
  $(".content1").show();
  $(".content2").show();
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
});

// Send POST request to save teams in MySQL database
$("#roster-name").keypress(function (event) {
  if (event.which == "13") {
    event.preventDefault();
  }
});

$("#saveteams").click(function (event) {
  event.preventDefault();
  console.log("button is working");

  console.log(oneForSql);
  console.log(twoForSql);
  console.log(freeForSql);

  rosterTitle.push($("#roster-name").val().trim());

  const teamOneObj = JSON.stringify(oneForSql);
  console.log(teamOneObj);

  const teamTwoObj = JSON.stringify(twoForSql);
  console.log(teamTwoObj);

  const teamInfo = {
    rosterName: rosterTitle,
    team1: teamOneObj,
    team2: teamTwoObj,
    freeAgent: freeForSql,
  };

  $.ajax("/api/teams", {
    type: "POST",
    data: teamInfo,
  }).then(function () {
    console.log("teams saved!");
  });

  // hitting save also creates a button with the roster name.
  cage.push($("#roster-name").val().trim());

  // buttonNames();

  $("#roster-name").val("");
  rosterTitle = [];
  console.log(rosterTitle);
});

// added a collapse on the toggler since it wouldn't collapse on its own - navbar now works as part of a single page application
$(".navbar-toggler").click(function () {
  $(".collapse").show();
});

// added functionality to navbar selection
$(".savedteams").click(function () {
  $(".collapse").hide();

  $(".rostergenerator").hide();

  $("#teamssaved").show();

  buttonNames();

  console.log("single page application!");
});

// added functionality to navbar selection
$(".homeroster").click(function () {
  $(".collapse").hide();

  $("#teamssaved").hide();
  $(".rostergenerator").show();

  console.log("create again!");
});

function buttonNames() {
  // $("#button-row").text("");
  $("#teamlist").text("");

  console.log(cage);

  for (i = 0; i < cage.length; i++) {
    // let newLi = document.createElement("li");
    let btnBtn = $("<li>");
    btnBtn.text(cage[i]);
    btnBtn.attr("data-index", cage[i]);
    btnBtn.css({
      color: "white",
      "text-align": "center",
      "background-color": "#BB090F",
      padding: "5px",
      "border-style": "solid",
      "border-width": "thin",
      cursor: "pointer",
      height: "50px",
      "font-size": "20px",
    });
    btnBtn.addClass("grab-rostername");

    let deleteBtn = $("<button>");
    deleteBtn.addClass("deleteme");
    deleteBtn.text("X");
    deleteBtn.css({
      color: "red",
      "background-color": "white",
      float: "right",
    });
    btnBtn.append(deleteBtn);

    // newLi.append(btnBtn);
    $("#teamlist").append(btnBtn);
    // $("#button-row").append(btnBtn);
  }
}

$("#teamlist").click(function (event) {
  let element = event.target;
  if (element.matches(".deleteme") === true) {
    let index = element.parentElement.getAttribute("data-index");


    // add the delete route here ------------this is where I'll pick it up !!!!!
    // let clickRoster = $(this).attr("data-index");
    // console.log(clickRoster);
  
    const deleteTeamData = index;
    console.log(deleteTeamData);


    $.ajax("/api/teams" + deleteTeamData, {
      type: "DELETE",
    }).then(function () {
      console.log("roster & teams deleted!");
    });



    cage.splice(index, 1);
    buttonNames();


    console.log("Elder Island");
  }
});
// Clicking on roster buttons, GET request, to retrieve rosters and populate fields

let package = [];

$("#teamlist").on("click", ".grab-rostername", function (event) {
  event.preventDefault();
  rosterField = [];

  let clickRoster = $(this).attr("data-index");
  console.log(clickRoster);

  const nameQuery = clickRoster;
  console.log(nameQuery);

  //   // want to be able to grab name from button, and use that to retrieve roster from database

  $.ajax("/api/teams/" + nameQuery, {
    type: "GET",
  }).then(function (result) {
    console.log(JSON.parse(result[0].Team_1));

    const firstTeam = JSON.parse(result[0].Team_1);
    const secondTeam = JSON.parse(result[0].Team_2);

    const lonePlayer = result[0].Free_Agent;
    result[0].Roster_name;

    $("#teamone-list").text("");
    $("#teamtwo-list").text("");
    $("#loneplayer").text("");

    $("#teamssaved").hide();
    $(".rostergenerator").show();

    console.log(firstTeam);

    for (i = 0; i < firstTeam.length; i++) {
      let player = firstTeam[i];
      let newLi = $("<li>");
      newLi.text(player);
      $("#teamone-list").append(newLi);
      $("#roster-list").text("");
    }

    for (i = 0; i < secondTeam.length; i++) {
      let player = secondTeam[i];
      let newLi = $("<li>");
      newLi.text(player);
      $("#teamtwo-list").append(newLi);
      $("#roster-list").text("");
    }

    $("#loneplayer").append(lonePlayer);
  });
});

// this code clears all players and teams; resets team builder
$("#anew").click(function (event) {
  event.preventDefault();

  rosterField = [];
  $("#messi").show();
  $("#player-count").text(0);
  $("#roster-list").text("");
  $("#teamone-list").text("");
  $("#teamtwo-list").text("");
  $("#loneplayer").text("");
  $(".content1").hide();
  $(".content2").hide();
  $("#player-count").hide();
  $("#numplayers").hide();
  $("#title").hide();
  $("#randomteams").hide();
});
