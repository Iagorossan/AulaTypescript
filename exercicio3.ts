//Crie uma função que receba dois vaores númericos e mostre na tela o resultado das seguintes operações
//SOMA,  SUBTRAÇÃO,    Divisão, Multiplicação.

import PromptSync = require ("prompt-sync");
const prompt = PromptSync();

const num1:number = Number(prompt("digite 1° numero:"));
const num2:number = Number(prompt("digite 2° numero:"));

function soma (num1:number, num2:number){
    
};

function subtracao (num1:number, num2:number){
    
};

function divisao (num1:number, num2:number){
    
};

function Multiplicacao (num1:number, num2:number){
    
};

console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num1 - num2}`);
console.log(`divisão: ${num1 / num2}`);
console.log(`Multiplicação: ${num1 * num2}`);