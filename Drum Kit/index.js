var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function () {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var drumSound = new Audio("sounds/tom-1.mp3");
      drumSound.play();
      break;
    case "a":
      var drumSound = new Audio("sounds/tom-2.mp3");
      drumSound.play();
      break;
    case "s":
      var drumSound = new Audio("sounds/tom-3.mp3");
      drumSound.play();
      break;
    case "d":
      var drumSound = new Audio("sounds/tom-4.mp3");
      drumSound.play();
      break;
    case "j":
      var drumSound = new Audio("sounds/snare.mp3");
      drumSound.play();
      break;
    case "k":
      var drumSound = new Audio("sounds/kick-bass.mp3");
      drumSound.play();
      break;
    case "l":
      var drumSound = new Audio("sounds/crash.mp3");
      drumSound.play();
      break;
  }
  buttonAnimation(key);
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
      activeButton.classList.remove("pressed");
  }, 100);
}
