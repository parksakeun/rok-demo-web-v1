var EngineSingleton = function () {
  this.startGame = function (config) {
    var canvas = config.canvas;
    canvas.innerHTML = "Game is loading...";
    // Actual game loading logic would go here.
  };
};