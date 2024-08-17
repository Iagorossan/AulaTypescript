//Crie um programa que declare um array com os números de 1 até 10. A seguir, solicite que o usuário digite um número maior que 10 e adicione o número digitado no arry. Mostre os todos os dados do arry na tela.

import PromptSync = require ("prompt-sync");
const prompt = PromptSync();

const lista: number[] = [1,2,3,4,5,6,7,8,9,10];
const x = prompt("Digite um número maior que 10");


lista.push(Number(x));
lista.push();