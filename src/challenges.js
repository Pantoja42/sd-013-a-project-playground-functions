// Desafio 1 - se ambos os valores forem true...
function compareTrue(num1, num2) {
  if (num1 && num2) {
    return true;
  }
}
console.log(compareTrue(2, 3));

// Desafio 2 - calcula a área de um triangulo!
function calcArea(base, height) {
  const calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(frase) {
  const splitedArray = frase.split(' ');
  return splitedArray;
}

// Desafio 4
function concatName(nomes) {
  let ultimo = nomes.length - 1;
  return [nomes[0], nomes[ultimo]];
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
