const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;

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
  const time = randomTime(200, 1000);
  const holeSelected = randomHole(holes);
  holeSelected.classList.add('up');

  setTimeout(() => {
    holeSelected.classList.remove('up');
    if (!timeUp) moleAppear();
  }, time)
}