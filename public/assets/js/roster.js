const addName = document.querySelector("#roster-creation");
const rosterList = document.querySelector("#roster-list");
const rosterForm = document.querySelector("#roster-form");
const saveRoster = document.querySelector("#save");
const randomBtn = document.querySelector("#randomteams");
const teamOne = document.querySelector("team1");
const teamOneList = document.querySelector("#teamone-list");
const teamTwo = document.querySelector("team2");
const teamTwoList = document.querySelector("#teamtwo-list");
const extraPlayer = document.querySelector("#freeagent");
const lonePlayer = document.querySelector("#loneplayer");
const playerCount = document.querySelector("#player-count");
const clear = document.querySelector(".clear");

// script vars for players html

let rosterField = [];

savedTeam();
manyPlayers();

rosterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let rosterText = addName.value.trim().toLowerCase();

  rosterText.charAt(0).toUpperCase();
  rosterText.slice(1);

   nameRoster = rosterText.charAt(0).toUpperCase() + rosterText.slice(1);

  if (nameRoster === "") {
    return;
  }
  rosterField.push(nameRoster);
  addName.value = "";
  lonePlayer.textContent = "";
  manyPlayers();
});

rosterList.addEventListener("click", function (event) {
  let element = event.target;
  if (element.matches("button") === true) {
    let index = element.parentElement.getAttribute("data-index");
    rosterField.splice(index, 1);
    manyPlayers();
  }
});

//  its the data-index, hypo - when i delete one above, it doesn't update the roster and it deletes everything with it
// I need a function that upates the data index each time a player is added, each time a player is deleted

function manyPlayers() {
  rosterList.textContent = "";
  for (i = 0; i < rosterField.length; i++) {
    let playerBox = rosterField[i];
    let newLi = document.createElement("li");
    newLi.textContent = playerBox;
    newLi.setAttribute("data-index", i);
    let nameBtn = document.createElement("button");
    nameBtn.className = "btn";
    nameBtn.textContent = "x";
    nameBtn.style.color = "red";
    newLi.appendChild(nameBtn);
    rosterList.append(newLi);
    localStorage.setItem("team", JSON.stringify(rosterField));
    0;
  }
  playerCount.textContent = rosterField.length;
}

function savedTeam() {
  let storedTeam = JSON.parse(localStorage.getItem("team"));
  if (storedTeam !== null) {
    rosterField = storedTeam;
  }
  manyPlayers();
}

randomBtn.addEventListener("click", function () {
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

  teamOneList.textContent = "";
  teamTwoList.textContent = "";
  lonePlayer.textContent = "";

  if (oneTeam.length % 2 !== 0) {
    let hmm = oneTeam.pop();
    freeAgent.push(hmm);
    lonePlayer.append(freeAgent);

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
    let newLi = document.createElement("li");
    newLi.textContent = playerBox;
    teamOneList.append(newLi);
  }

  localStorage.setItem("aTeam", JSON.stringify(aTeam));

  for (i = 0; i < bTeam.length; i++) {
    let playerBox = bTeam[i];
    let newLi = document.createElement("li");
    newLi.textContent = playerBox;
    teamTwoList.append(newLi);
  }

  localStorage.setItem("bTeam", JSON.stringify(bTeam));
});

// --------------------------------------
clear.addEventListener("click", function () {

  rosterField = [];
  rosterList.textContent = "";
  playerCount.textContent = "";
  teamOneList.textContent = "";
  teamTwoList.textContent = "";
  lonePlayer.textContent = "";

});
