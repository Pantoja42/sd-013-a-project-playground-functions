// Desafio 10
function techList(arr, name) {
  if (arr.length === 0) {
    return 'Vazio!';
  }

  arr.sort();
  let ordenedArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    ordenedArr.push({
      tech: arr[i],
      name,
    });
  }
  return ordenedArr;
}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < arr.length; i += 1) {
    const value = arr[i];
    let count = 0;

    for (let j = 0; j < arr.length; j += 1) {
      if (value === arr[j]) {
        count += 1;
      }
    }

    if (value < 0 || value > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let telefonNumber = '(xx) xxxxx-xxxx';

  for (let i = 0; i < arr.length; i += 1) {
    telefonNumber = telefonNumber.replace('x', arr[i]);
  }

  return telefonNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
}

// Desafio 13
function hydrate(str) {
  let onlyNumbers = str
    .match(/\d/g)
    .reduce((acc, curr) => Number(curr) + acc, 0);
  return onlyNumbers === 1
    ? `${onlyNumbers} copo de água`
    : `${onlyNumbers} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
