// Desafio 1
function compareTrue(j,c) {
    if(j == true && c == true) {
      return true
    } else {
      return false
    }
}
// console.log(compareTrue(false,true)) ok
// console.log(compareTrue(false,false)) ok
// console.log(compareTrue(true,true)) ok

// Desafio 2
function calcArea(base, height) { 
  area = (base*height)/2
  return area
}
// console.log(calcArea(10,50)) ok
// console.log(calcArea(5,2)) ok
// console.log(calcArea(51,1)) ok 

// Desafio 3
function splitSentence(j) {
  return j.split(' ')
}
// console.log(splitSentence('go trybe')) ok
// console.log(splitSentence('vamo que vamo')) ok
// console.log(splitSentence('foquete')) ok

// Desafio 4
function concatName(jhon) {  //jhon = array
  let last = jhon[jhon.length - 1];
  let first = jhon[0];
  return last + ' ' + first;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
// console.log(concatName(['foquete', 'nao', 'tem','jhon', 'ré',]))
// console.log(concatName(['captain', 'my','jhon','captain',]))

// Desafio 5
function footballPoints(wins,ties) {
  let jhon = wins * 3 + ties;
  return jhon;
}
// console.log(footballPoints(14,8));
// console.log(footballPoints(1,2));
// console.log(footballPoints(0,0));

// Desafio 6
 function highestCount(jhon) {
  let contador = 0;
  let NumMAX = Math.max(...jhon);  
  for (let index = 0; index < jhon.length; index++) {
    if (jhon[index] === NumMAX) {
      contador++;
    }
  }
  return contador;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))
console.log(highestCount([0, 0, 0]))



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
