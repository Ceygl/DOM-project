//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//! 1-100 arasinda rastgele bir sayi tut

let randomNumber = Math.round(Math.random() * 100);

console.log(randomNumber);
//? Variables

let score = 10;
let topScore = 0;


//! checkBtn basildigindaki kontrolleri yap

document.querySelector(".check-btn").addEventListener("click", ()=> {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  if (!guessInput){
    msg.innerText = "Please enter a number";

  }else if(randomNumber === guessInput){
    msg.innerHTML = `Congrats, you win <i class="fa-solid fa-face-grin-hearts fa-2x"></i> `;
    body.className = "bg-success";
    if(score > topScore){
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
  } 
  //! IF RANDOMNUMBER != INPUT.VALUE
  else{
    if(score > 1){
      score -= 1;
    guessInput > randomNumber
      ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE`)
      : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCRESAE`);
  }  else {
    // document.querySelector(".check-btn").disabled = "true";
    msg.innerHTML = `Sorry, you lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
    score = 0;
    body.className = "bg-danger";
    document.querySelector(".secret-number").textContent = randomNumber;

  }
  document.querySelector(".score").textContent = score;
    
    }
  

});

// new topScore = score
//*secretNumber visible
//! if not:
//! if score > 0
//!! score == score - 1
//? if random < input.value ----- Decrease!
//? if not ------ increase!
//! if score >= 0 ------- sorry, you lost!

//* !!!!!!!!!!!!! when again pressed, all should be updated.

document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".guess-input").value = "";

  document.querySelector(".score").textContent = score;
  randomNumber = Math.round(Math.random() * 100);
  document.querySelector(".secret-number").textContent = "?";
  console.log(randomNumber);
  if(document.querySelector("body").className = "bg-success"){
    document.querySelector("body").classList.remove("bg-success")
  }else{
    document.querySelector("body").classList.remove("bg-danger");
  };
  document.querySelector(".msg").innerText = "Starting.."

})