// Desafio 1
function compareTrue(a,b) {
  if (a == true && b == true){
    return true
  } return false
}

// Desafio 2
function calcArea(base, height) {
  var conta = base * height / 2
  return conta
}

// Desafio 3
function splitSentence(string) {
  var array = []
  return string.split(" ")
}

// Desafio 4
function concatName(array) {
  let retorno
  retorno = (array[array.length - 1] + ", ")
  retorno += (array[0])
  return retorno
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0
  pontos += wins * 3
  pontos += ties * 1
  return pontos
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
