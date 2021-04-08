const red = document.getElementById('red');
const orange = document.getElementById('orange');
const green = document.getElementById('green');

console.log(red, orange, green);

function redLight() {
  red.classList.remove('black');
  red.classList.add('red');
}

function orangeLight() {
  orange.classList.remove('black');
  orange.classList.add('orange');
}

function greenLight() {
  green.classList.remove('black');
  green.classList.add('green');
}

function blackLight() {
  red.classList.remove('red');
  orange.classList.remove('orange');
  green.classList.remove('green');

  red.classList.add('black');
  orange.classList.add('black');
  green.classList.add('black');
}
