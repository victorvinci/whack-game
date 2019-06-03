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
  if (score >= 10) {
    levelIndex++
    fetch("levelOne.json")
    .then(response => response.json())
    .then(function(data) {
      const game = document.querySelector('.game');
      game.innerHTML = data.levels[levelIndex].level.html;
    });
  }}