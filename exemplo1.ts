//1) Crie um arquivo chamado ex1.ts
//2) Crie um programa que receba um número do usuário e mostre seus 2 antecessores e sucessores

import PromptSync = require('prompt-sync');

var prompt = PromptSync();
const entrada: string = prompt("Insira um numero");


var numero1 = Number(entrada);
const numero2 : number = numero1-1;
const numero3 : number = numero1-2;

const numero4 = numero1+1;
const numero5 : number = numero1+2;


console.log(`o numero${numero1} tem como seus antecessores ${numero2},${numero3} e como sucessores ${numero4},${numero5}`);