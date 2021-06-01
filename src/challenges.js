// Desafio 1
function compareTrue(v1, v2) {
  // seu código aqui
  if (v1 === true && v2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calculoArea = (base * height) / 2;
  return calculoArea;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(nome) {
  // seu código aqui
  for (let index = 0; index < nome.length; index += 1) {
    concatName = (`${nome[nome.length - 1]}, ${nome[0]}`);
  }
  return concatName;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsGames = wins * 3;
  let tiesGames = ties * 1;
  return winsGames + tiesGames;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let higherNumber = array[0];
  let contador = 0;
  for (let index1 = 0; index1 < array.length; index1 +=1) {
    if (higherNumber < array[index1]) {
     higherNumber = array[index1];
    }
  } for (let index2=0; index2 < array.length; index2 +=1) {
    if (array[index2] === higherNumber){
        contador +=1;
      }
    } return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);

  if (dist1 > dist2) {
    return 'cat2';
  }
  if (dist2 > dist1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    newArray.push("bug!");
    if (array[index] % 15 === 0) {
      retorno = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      retorno = 'fizz';
    } else if (array[index] % 5 === 0) {
      retorno = 'buzz';
    }
  } return newArray;
}

// Desafio 9
function encode(number) {
  // seu código aqui
  string = string.replace(/a/g, "1");
  string = string.replace(/e/g, "2");
  string = string.replace(/i/g, "3");
  string = string.replace(/o/g, "4");
  string = string.replace(/u/g, "5");
  return string;  
}

function decode(string) {
  // seu código aqui
  string = string.replace(/1/g, "a");
  string = string.replace(/2/g, "e");
  string = string.replace(/3/g, "i");
  string = string.replace(/4/g, "o");
  string = string.replace(/5/g, "u");
  return string;  
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
