// Desafio 1
function compareTrue(num1, num2) {
  // seu código aqui
  if (num1 === true && num2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4 
function concatName(arr) {
  // seu código aqui
  let first = arr[0];
  let last = arr[arr.length -1];
  let merge = last + ', ' + first;
  return merge;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  
  let points= wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
