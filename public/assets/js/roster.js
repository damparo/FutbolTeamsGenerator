let rosterField = [];

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













// Send POST request
// $("#saveteam").click(function (event) {
//   event.preventDefault();

//   const teamInfo = {
//     rosterName: $("#roster-name").val().trim(),
//     team1: $("#teamone-list").val().trim(),
//     team2: $("#teamtwo-list").val().trim(),
//     freeAgent: $("#loneplayer").val().trim(),
//   };

//   $.ajax("/api/teams", {
//     type: "POST",
//     data: teamInfo,
//   }).then(function () {
//     console.log("teams saved!");
//   });
// });

