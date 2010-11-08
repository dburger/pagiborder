var keyDownPageYOffset;

var addArrow = function(pageYOffset, side, direction) {
  var arrowYOffset = (direction === "down") ? 0 : -16;
  var arrow = document.createElement("img");
  arrow.className = "arrow";
  arrow.src = chrome.extension.getURL("arrow_" + direction + ".png");
  arrow.style.top = (pageYOffset + arrowYOffset) + "px";
  arrow.style[side] = 0;
  return arrow;
};

var addMarker = function(pageYOffset, direction) {
  var div = document.createElement("div");
  div.className = "marker";
  div.style.top = pageYOffset + "px";
  document.body.appendChild(div);
  var leftArrow = addArrow(pageYOffset, "left", direction);
  document.body.appendChild(leftArrow);
  var rightArrow = addArrow(pageYOffset, "right", direction);
  document.body.appendChild(rightArrow);
  window.setTimeout(function() {
    document.body.removeChild(div);
    document.body.removeChild(leftArrow);
    document.body.removeChild(rightArrow);
  }, 2000);
};

document.body.addEventListener('keydown', function(evt) {
  keyDownPageYOffset = window.pageYOffset;
});

document.body.addEventListener('keyup', function(evt) {
  if (evt.keyCode === 32) {
    var keyUpPageYOffset = window.pageYOffset;
    if (keyUpPageYOffset > keyDownPageYOffset) {
      addMarker(keyDownPageYOffset + window.innerHeight, "down");
    } else if (keyUpPageYOffset < keyDownPageYOffset) {
      addMarker(keyDownPageYOffset, "up");
    }
  }
});
