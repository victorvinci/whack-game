function loadLevel(){
  if (score === 0) {
    fetch("levelOne.json")
    .then(response => response.json())
    .then(function(data) {
      const game = document.querySelector('.game');
      game.innerHTML = data.levels[0].levelOne.html;
    });
  }}