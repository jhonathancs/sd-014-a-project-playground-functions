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
  return last + ', ' + first;
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
  let NumMAX = Math.max(...jhon);   //operador spread retorna o maior numero de array
  for (let index = 0; index < jhon.length; index++) {
    if (jhon[index] === NumMAX) {
      contador++;
    }
  }
  return contador;
}

// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))
// console.log(highestCount([0, 0, 0]))

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// console.log(catAndMouse(2,6,5))
// console.log(catAndMouse(2,3,5))
// console.log(catAndMouse(2,5,5))

// Desafio 8 jhon = array
function fizzBuzz(jhon) {
  let resultado = []
  for (let index of jhon) {
    if (index % 3 === 0 && index % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (index % 3 === 0) {
      resultado.push('fizz');
    } else if (index % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

//  console.log(fizzBuzz([2, 15, 7, 9, 45]))
// console.log(fizzBuzz([7, 9]))
// console.log(fizzBuzz([9, 25]))


// Desafio 9 jhon = array posso usar replace dps tentar
function encode(palavra) {
  let jhon = palavra.split('');
  for (let index in jhon) {
    switch (jhon[index]) {
      case 'a':
        jhon[index] = '1';
        break;
      case 'e':
        jhon[index] = '2';
        break;
      case 'i':
        jhon[index] = '3';
        break;
      case 'o':
        jhon[index] = '4';
        break;
      case 'u':
        jhon[index] = '5';
        break;
    }
  }
  jhon = jhon.join('');
  return jhon.toString();
}

// console.log(encode('hi there!'))

function decode(numeros) {
  let jhon = numeros.split('');
  for (let index in jhon) {
    switch (jhon[index]) {
      case '1':
        jhon[index] = 'a';
        break;
      case '2':
        jhon[index] = 'e';
        break;
      case '3':
        jhon[index] = 'i';
        break;
      case '4':
        jhon[index] = 'o';
        break;
      case '5':
        jhon[index] = 'u';
        break;
  
    }
  }
  jhon = jhon.join('');
  return jhon.toString()
}

// console.log(decode('h3 th2r2!'))

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
