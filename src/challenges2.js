// Desafio 10 jhon = array
function techList(jhon,name) {
  if(jhon.length === 0) {
    return 'Vazio!';
  } 
  jhon.sort();
  let resultado = [];
  for(let index of jhon) {
    resultado = resultado.concat({'tech': index, 'name':name});

  }
  return resultado;
}
 
// console.log((techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'jhon')))

// Desafio 11 jhon = array lucas farias, lys prestes, felipe santiago grupo de estudo
function generatePhoneNumber(phone) {
  let contador = 0;
  if (phone.length !== 11) {
    return "Array com tamanho incorreto.";
  } else {
    for(let jhon = 0; jhon <= phone.length; jhon++) {
      contador = 0;
      for(let index = 0; index <= phone.length; index++) {
      if (phone[index] < 0 | phone[index > 9]) {
        return "não é possível gerar um número de telefone com esses valores";
      }
      if (phone[jhon] == phone[index]) {
        contador++; 
      }
      if (contador >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
    return "(" + phone[0] + phone[1] + ")" + " " + phone[2] + phone[3] + phone[4] + phone[5] + phone[6] + "-" + phone[7] + phone[8] + phone[9] + phone[10];
  }
  
}

//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaAB = Math.abs(lineA - lineB)
  let somaAC = Math.abs(lineA - lineC);
  let somaBC = Math.abs(lineB - lineC);
  if (lineA < somaBC || lineB < somaAC || lineC < somaAB) {
    return false;
  }
  somaAB = lineA + lineB;
  somaAC = lineA + lineC;
  somaBC = lineB + lineC;
  if (lineA > somaBC || lineB > somaAC || lineC > somaAB) {
    return false;
  }
  return true;
} 

// console.log(triangleCheck(10,14,8))

// Desafio 13 array = jhon
function hydrate(copos) {
  let jhon = copos.split('');
  let contador = 0;
  for (let index of jhon) {
    if (Number(index)) {
      contador += Number(index);
    }
  }
  if (contador === 1) {
    return contador + ' copo de água'
  }
  return contador + ' copos de água'
}

//  console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
