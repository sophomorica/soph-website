function reveal() {
  var userBox = document.getElementById("box-" + userGuess);
  userBox.className =
    userGuess === ballPosition ? "box reveal win" : "box reveal";
  var boxes = document.getElementsByClassName("box");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener("click", makeGuess);
  }
  setTimeout(function() {
    reset();
  }, 1000);
}
