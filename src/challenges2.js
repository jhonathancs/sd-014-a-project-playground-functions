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

// Desafio 11 jhon = array lucas farias
function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return "Array com tamanho incorreto.";
  } else {
    for(let jhon = 0; jhon <= phone.length; jhon++) {
      contador = 0;
      for(let index = 0; index <= phone.length; index++) {
      if (phone[index] < 0 | phone[index > 9]) {
        return "não é possível gerar um número de telefone com esses valores"
      }
      if (phone[jhon] == phone[index]) {
        contador++; 
      }
      if (contador >= 3) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
  }
    return "(" + phone[0] + phone[1] + ")" + " " + phone[2] + phone[3] + phone[4] + phone[5] + phone[6] + "-"+ phone[7] + phone[8] + phone[9] + phone[10];
  }
  
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
