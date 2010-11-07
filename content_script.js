var keyDownPageYOffset;

var addMarker = function(pageYOffset) {
  var div = document.createElement("div");
  div.style.top = pageYOffset + "px";
  div.className = "overlay";
  document.body.appendChild(div);
  window.setTimeout(function() {
    document.body.removeChild(div);
  }, 2000);
};

document.body.addEventListener('keydown', function(evt) {
  keyDownPageYOffset = window.pageYOffset;
});

document.body.addEventListener('keyup', function(evt) {
  if (evt.keyCode === 32) {
    var keyUpPageYOffset = window.pageYOffset;
    if (keyUpPageYOffset > keyDownPageYOffset) {
      addMarker(keyDownPageYOffset + window.innerHeight);
    } else if (keyUpPageYOffset < keyDownPageYOffset) {
      addMarker(keyDownPageYOffset);
    }
  }
});
