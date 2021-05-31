// Desafio 1
function compareTrue(valor1, valor2) {
  let result = valor1 && valor2;
  return result;
  
}


// Desafio 2
function calcArea(base,height) {
  let result = (base * height) / 2;
  return result;
  
}

// Desafio 3
function splitSentence(string) {
  let newArray=[];
  let aux=0;
  //for para preencher o array com algo, para ele não ficar como não idenficado 
  for (let index = 0; index < string.length; index+=1) {
    newArray[aux]=""; 
    if (string[index]==" ") {
      aux+=1;        
    }        
  }
  aux=0;
  for (let index = 0; index < string.length; index+=1) {   
    if (string[index]==" ") {      
      aux+=1;        
    }    
    else{
      newArray[aux]=newArray[aux] + string[index];
    }
  }
  return newArray;
}


// Desafio 4
function concatName(array=[]) {
  let concatValue="";  
  concatValue= array[array.length-1] + "," + " " + array[0];
  return concatValue;
  
}



// Desafio 5
function footballPoints(wins,ties) {
  let result= (3*wins) + (1*ties);
  return result;

}


// Desafio 6
function highestCount(num=[]) {
  let highValue = num[0];
  let count=0;
  for (let index = 0; index < num.length; index+=1) {
    if (highValue < num[index]){
      highValue = num[index];
    }    
  }
  for (let index = 0; index < num.length; index++) {
    if (highValue == num[index]){
      count+=1;
    }    
  }
  return count;

}
let array=[-2,-2,-1];
console.log(highestCount(array));


// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let msg;
  let distA = Math.abs(mouse - cat1);
  let distB = Math.abs(mouse - cat2);
  if (distA > distB){
    msg="cat2";
    return msg;
  }
  else if (distA == distB){    
    msg="os gatos trombam e o rato foge";
    return msg;
  }
  else {
    msg="cat1";
    return msg;    
  }
}
console.log(catAndMouse(1,0,2));



// Desafio 8
function fizzBuzz(num=[]) {
  let string=[];
  for (let index = 0; index < num.length; index++) {
    if (num[index]%5==0 && num[index]%3 == 0){
      string[index]= "fizzBuzz";
    }
    else if(num[index]%5 ==0){
      string[index] = "buzz";
    }
    else if(num[index]%3 == 0) {
      string[index] = "fizz";
    }
    else{
      string[index] = "bug!";
    }    
  }
  return string;
  
}


// Desafio 9
function encode(string) {
  let novaString;    
  string = string.replace(/a/g, "1");
  string = string.replace(/e/g, "2");
  string = string.replace(/i/g, "3");
  string = string.replace(/o/g, "4");
  string = string.replace(/u/g, "5");    
  return string;
}


function decode(string) {
  let novatring;    
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
