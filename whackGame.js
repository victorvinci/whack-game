const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  if (hole === lastHole){
    return randomHole(holes);
  } 

  lastHole = hole;

  return hole;
}

function moleAppear() {
  const holeSelected = randomHole(holes);
  const time = randomTime(200, 1500);
  holeSelected.classList.remove('smack');
  holeSelected.firstElementChild.classList.add('up');
  
  setTimeout(() => {
    holeSelected.classList.remove('up');
    if (!timeUp) moleAppear();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  moleAppear();
  setTimeout(() => {
    timeUp = true
    const clearBoard = document.querySelectorAll('.up');
    clearBoard.forEach(clear => clear.classList.remove('up'));
    window.alert('Time Up!');
  }, 10000);
}

function hitMole(e) {

  if (this.parentNode.classList.contains('smack')) return;

  if(!e.isTrusted) {
    console.log("Cheater!");
    return;
  }

  score++;
  this.classList.remove('up');
  this.parentNode.classList.add('smack');
  setTimeout(() => this.parentNode.classList.remove('smack'), 800);
  
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', hitMole));