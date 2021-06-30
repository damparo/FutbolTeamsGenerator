let cage = [];

// hitting save also creates a button with the roster name.
cage.push($("#roster-name").val().trim());

buttonNames();

$("#roster-name").val("");
rosterTitle = [];
console.log(rosterTitle);

function buttonNames() {
    // $("#button-row").text("");
    $("#teamlist").text("");
  
    for (i = 0; i < cage.length; i++) {
      let btnBtn = $("<button>");
      btnBtn.text(cage[i]);
      btnBtn.attr("data-index", cage[i]);
      btnBtn.css({
        color: "white",
        "text-align": "center",
        "background-color": "#BB090F",
        padding: "10px",
        "padding-left": "15px",
        "border-style": "solid",
        "border-width": "thin",
      });
      btnBtn.addClass("grab-rostername");
  
      $("#teamlist").append(btnBtn);
      // $("#button-row").append(btnBtn);
    }
  }

  //   retrieve rosternames & teams from database and then create buttons for them

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

    $(".content1").show();

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
