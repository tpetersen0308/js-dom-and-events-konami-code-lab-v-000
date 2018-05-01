const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// [UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, B, A]
let lastTenKeys = [];

function init() {
  // Write your JavaScript code inside the init() function

  document.body.addEventListener('keydown', checkKeys);
}

function checkKeys(e) {
  lastTenKeys.push(e.which || e.detail);
  if (lastTenKeys.length > 10) {
    lastTenKeys = lastTenKeys.splice(-10);
  }
  if (lastTenKeys.join() === code.join()) {
    alert("You've cracked the Konami Code!")
  }
}
