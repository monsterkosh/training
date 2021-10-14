//  EJERCICIO UNO - total de numeros pares e impares
const listaUno = [4, 5, 1, 3, 6, 7, 9, 0, 3]; // total de numeros pares e impares

let even = 0;
let odd = 0;

function oddOrEven(lista) {
  if (typeof lista[0] == 'number') {
    if (lista[0] % 2 === 0) {
      even++;
      lista.shift();
    } else {
      odd++;
      lista.shift();
    }
  } else return 'Even numbers: ' + even + '\n' + 'Odd numbers: ' + odd;

  return oddOrEven(lista);
}

console.log(oddOrEven(listaUno));

// EJERCICIO DOS - total de veces del numero 3
const listaDos = [4, 5, 1, 3, 6, 7, 9, 0, 3];

// let count = 0;
// function countNumber(lista, num) {
//   if (typeof lista[0] == 'number') {
//     if (lista[0] == num) {
//       count++;
//       lista.shift();
//     }
//   } else return count;
//   return countNumber(lista, num);
// }

// console.log(countNumber(listaDos, 3));

// EJERCICIO TRES - buscar si existe un numer n en el array
const listaTres = [4, 5, 1, 3, 6, 7, 9, 0, 3];
const numero = 45;

function searchForNum(lista, num) {
  if (typeof lista[0] == 'number') {
    if (lista[0] === num) {
      return 'Yes, ' + num + ' is on the list';
    } else {
      lista.shift();
    }
  } else return 'No, ' + num + ' is NOT on the list';

  return searchForNum(lista, num);
}

console.log(searchForNum(listaTres, numero));
