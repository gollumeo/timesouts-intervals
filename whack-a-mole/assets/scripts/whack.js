function whackAMole() {
  const moles = document.querySelectorAll(
    "#mole1, #mole2, #mole3, #mole4, #mole5, #mole6, #mole7, #mole8, #mole9, #mole10, #mole11, #mole12"
  );
  let timeOut;
  let timeUp = false;
  let score = 0;
  let time = prompt("How long do you want to play? (in seconds)") * 1000

  console.log("cocou");

  function randomMole() {
    const randomIndex = Math.floor(Math.random() * moles.length);
    moles[randomIndex].classList.toggle("up");
    timeOut = setTimeout(() => {
      moles[randomIndex].classList.toggle("up");
      if (!timeUp) randomMole();
    }, 1000);
  }

  moles.forEach((mole) => mole.addEventListener("click", hitMole));

  function hitMole(e) {
    if (!e.isTrusted) return;
    this.classList.remove("up");
    score++;
    console.log(score);
    clearTimeout(timeOut);
    randomMole();
    let scoreSpan = document.querySelector("#score");
    scoreSpan.innerHTML = score;
  }

  randomMole();

  setTimeout(() => {
    timeUp = true;
    alert("Time's up!");
  }, time);
}

whackAMole();


let playAgain = document.querySelector('.play-again')
const reloadGame = () => { location.reload() }

playAgain.addEventListener('click', reloadGame)

