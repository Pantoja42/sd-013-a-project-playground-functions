// Iniciando o projeto
// Desafio 1
function compareTrue(vl1, vl2) {
  if((lv1 === true) && (lv2 === true)){
    return true;
  } 
    return false;
} 

// Desafio 2
function calcArea(base, height) {
  Area = (base * height) / 2;
    return Area;
}

// Desafio 3
function splitSentence() {
  let split = string.split(' ');
  }  
  return split;
}

  // Desafio 4
  function concatName(array) {
    for (let index = 0; index < array.length; index += 1) {
      let lastname = (array.lenght - 1);
      let concatName (`${array[lastname]}, ${array[0]}`);
    }
    return concatName;
  }


// Desafio 5
function footballPoints() {
  function footballPoints(wins, ties) {
    let winsPoint = 3;
    let tiesPoint = 1;
  
    let numberWins = wins * winsPoint;
    let numberTies = ties * tiesPoint;
  
    return numberWins + numberTies;
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
