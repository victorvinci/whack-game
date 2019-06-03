let levelIndex = 0;

function loadLevel(){
  if (score === 0) {
    fetch("levelOne.json")
    .then(response => response.json())
    .then(function(data) {
      const game = document.querySelector('.game');
      game.innerHTML = data.levels[levelIndex].level.html;
    });
  }}

function nextLevel() {
  if (score >= 5 && levelIndex === 0) {
    levelIndex++
    finishScore = score;
    fetch("levelOne.json")
    .then(response => response.json())
    .then(function(data) {
      const game = document.querySelector('.game');
      game.innerHTML = data.levels[levelIndex].level.html;
    });

    setTimeout(function() {holes = document.querySelectorAll('.hole');
    scoreBoard = document.querySelector('.score');
    moles = document.querySelectorAll('.mole');

    moles.forEach(mole => mole.addEventListener('click', hitMole));
    scoreBoard.textContent = score;
    timeUp = false;
    moleFun();
    setTimeout(() => {
      timeUp = true
      const clearBoard = document.querySelectorAll('.up');
      clearBoard.forEach(clear => clear.classList.remove('up'));
      window.alert("Time's Up!");
    }, 10000);}, 1000);

  } else if (score >= finishScore + 5 && levelIndex >= 1) {
      levelIndex++
      finishScore = score;
      fetch("levelOne.json")
      .then(response => response.json())
      .then(function(data) {
        const game = document.querySelector('.game');
        game.innerHTML = data.levels[levelIndex].level.html;
      });
          setTimeout(function() {holes = document.querySelectorAll('.hole');
    scoreBoard = document.querySelector('.score');
    moles = document.querySelectorAll('.mole');

    moles.forEach(mole => mole.addEventListener('click', hitMole));
    scoreBoard.textContent = score;
    timeUp = false;
    moleFun();
    setTimeout(() => {
      timeUp = true
      const clearBoard = document.querySelectorAll('.up');
      clearBoard.forEach(clear => clear.classList.remove('up'));
      window.alert("Time's Up!");
    }, 10000);}, 1000);
  } else {
    window.alert('Game Over');
  }
    

}
