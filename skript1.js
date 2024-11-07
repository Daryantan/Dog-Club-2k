//theme
var switcher = 1;
var button = document.querySelector('.button-theme');
button.onclick = function style() {
  var styleLink = document.getElementById('style-link');
  if (switcher == 1) {
    styleLink.setAttribute('href', 'menu.css');
    switcher = 0;
  } else {
    styleLink.setAttribute('href', 'darkm.css');
    
    switcher = 1;
  }
}
