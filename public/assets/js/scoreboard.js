const leftTeam = document.querySelector("#team1");
const rightTeam = document.querySelector("#team2");
const leftNum = document.querySelector(".leftnumber");
const rightNum = document.querySelector(".rightnumber");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

const points = document.querySelector(".points");
const clear = document.querySelector(".clear");

let countL = localStorage.getItem("scoreL");
let  countR = localStorage.getItem("scoreR");
let counter = 0;
let secondCounter = 0;




  // if (sessionStorage.getItem("scoreL"));
  let storedScore = JSON.parse(countL);
  if (storedScore !== null) {
    counter = storedScore;
    leftNum.textContent = storedScore;
  }

  



// savedTeam();

  plus.addEventListener("click", function (e) {
    if (leftTeam.checked === true){

    

      counter ++;
      leftNum.textContent = counter;
      if (counter === 0) {
        leftNum.textContent = 0;
      }
      // localStorage.setItem("scoreL", counter);
     localStorage.setItem("scoreL", counter);

    }
    
  });
  
  
  
  minus.addEventListener("click", function () {

    if (leftTeam.checked === true){
    counter--;
    leftNum.textContent = counter;
  
    if (counter < 0) {
      counter = 0;
      leftNum.textContent = 0;
    }
  
    localStorage.setItem("scoreL", counter);
  };
  });
  


  let storedScore2 = JSON.parse(countR);
  if (storedScore2 !== null) {
    secondCounter = storedScore2;
    rightNum.textContent = storedScore2;
  }

  
  plus.addEventListener("click", function () {
    if (rightTeam.checked === true) {
   
    secondCounter++;
    rightNum.textContent = secondCounter;
    if (secondCounter === 0) {
      rightNum.textContent = 0;
    }
    localStorage.setItem("scoreR", secondCounter);
  }
  });

  minus.addEventListener("click", function () {

    if (rightTeam.checked === true) {

    secondCounter--;
    rightNum.textContent = secondCounter;

    if (secondCounter < 0) {
      secondCounter = 0;
      rightNum.textContent = 0;
    }
    // leftNum.textContent = countL;
    localStorage.setItem("scoreR", secondCounter);
  };
  });
  
// }
// }
clear.addEventListener("click", function(){
  
  
  counter = 0;
  secondCounter = 0;
  
  storedScore = 0;
  storedScore2 = 0;
  
  localStorage.clear();
  
  
  rightNum.textContent = 0;
  leftNum.textContent = 0;

})