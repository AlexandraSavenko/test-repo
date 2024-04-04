var button = document.querySelector("button");
var box = document.getElementById("changeMe");

function changeColor() {
  if (box.style.background == "red") {
    box.style.background = "blue";
  } else {
    box.style.background = "red";
  }
}

var box = document.getElementById("box");
var details = {
  color: "red",
  disappear: function () {
    box.style.visibility = "hidden";
  },
};
function revealShape() {
  box.style.visibility = "visible";
}

function revealColor() {
  details.color = prompt("What's your favourite color?");
  box.style.background = details.color;
}

function magicTrick() {
  details.disappear();
}
