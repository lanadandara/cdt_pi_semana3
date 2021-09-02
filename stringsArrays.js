let meuArray = ['Lana', true, 94];

// Acessar elementos específicos de um array.
console.log(meuArray[2]);

// Adicionar elementos a um array.
meuArray.unshift('azul');
console.log(meuArray);
// Extrair elementos de um array.
meuArray.pop();
console.log(meuArray);
// Comparar elementos de um array com os elementos de outro.
console.log('-----Comparar arrays-----');
let meuArray2 = ['Dandara', false, 94];
let resposta = meuArray === meuArray2;
console.log(resposta);
// Array Invertido
console.log('-----Imprimir Array Invertido-----');
let j = [1, 2, 3];
//1
function imprimirInverso(array) {
  console.log(array[2], array[1], array[0]);
}
imprimirInverso(j);

//2
console.log('-----Inverter arrays-----');
function inverter(novoArray) {
  let l = j.reverse();
  return l;
}

console.log(inverter(j));

//Somar Arrays
console.log('-----Somar Arrays-----');
let paraSomar = [1, 2, 3];
function sumArray(array) {
  let soma = 0;
  for (let u = 0; u < array.length; u++) {
    soma = soma + array[u];
  }
  return soma;
}
console.log(sumArray(paraSomar));

//Array join
console.log('-----Simulação de Join-----');
function join(arrayJoin) {
  let n = '';
  for (let contador = 0; contador < arrayJoin.length; contador++) {
    n = n + arrayJoin[contador];
  }
  return n;
}
console.log(join(['o', 'l', 'á']));

// Coleções Filmes
console.log('-----Filmes Maisculos-----');
let meusFilmes = [
  'star wars',
  'matrix',
  'mr. robot',
  'o preço do amanhã',
  'a vida é bela'
];

function maiuscula(array) {
  for (let item = 0; item < array.length; item++) {
    array[item] = array[item].toUpperCase();
  }
  return array;
}
console.log(maiuscula(meusFilmes));

console.log('-----Filmes Animação-----');
let animacao = [
  'toy story',
  'finding Nemo',
  'kung-fu panda',
  'wally',
  'fortnite'
];
function listaFilmes(array1, array2) {
  let filmesTotal;
  return (filmesTotal = array1.concat(array2));
}

let superLista = listaFilmes(meusFilmes, animacao);
console.log(superLista);

console.log('-----Deletar ultimo item-----');
function deletar(array) {
  let resto;
  return (resto = array.pop());
}
console.log(deletar(superLista));
console.log(superLista);

console.log('-----Classificações-----');
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparar(array1, array2) {
  let result = false;
  if (array1 === array2) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(comparar(asiaScores, euroScores));
